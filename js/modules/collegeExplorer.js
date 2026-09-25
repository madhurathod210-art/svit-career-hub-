/**
 * Module 1: College Explorer & Higher Education Directory
 * Supports Small to Big Campus sorting, Scholarships Finder,
 * Student Life & ROI analytics, and comprehensive institution types.
 */
import { COLLEGES_DATA, SCHOLARSHIPS_DIRECTORY } from '../data/mockData.js';

export class CollegeExplorer {
  constructor(app) {
    this.app = app;
    this.colleges = [...COLLEGES_DATA];
    this.scholarships = [...SCHOLARSHIPS_DIRECTORY];
    this.filteredColleges = [...COLLEGES_DATA];
    this.comparisonList = this.loadComparisonList();
    this.bookmarkedList = this.loadBookmarks();

    this.searchTerm = '';
    this.selectedStream = 'all';
    this.selectedType = 'all'; // 'all', 'govt', 'private', 'state-govt', 'autonomous'
    this.selectedDegree = 'all';
    this.selectedCampusScale = 'all'; // 'all', 'boutique', 'mid', 'mega'
    this.selectedScholarship = 'all'; // 'all', 'full-waiver', 'merit'
    this.selectedState = 'all';
    this.selectedFeeMax = 'all';
    this.selectedNirf = 'all';
    this.selectedSort = 'nirf'; // 'nirf', 'size-asc', 'size-desc', 'fee-asc', 'placement-desc', 'intake-asc'
    this.viewMode = 'all'; // 'all' or 'bookmarks'
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.populateStateFilter();
    this.applyFilters();
    this.updateComparisonDock();
  }

  cacheDOM() {
    this.container = document.getElementById('view-explorer');
    this.gridElement = document.getElementById('colleges-grid');
    this.searchInput = document.getElementById('college-search-input');
    this.streamFilter = document.getElementById('filter-stream');
    this.typeFilter = document.getElementById('filter-type');
    this.degreeFilter = document.getElementById('filter-degree');
    this.scaleFilter = document.getElementById('filter-scale');
    this.scholarshipFilter = document.getElementById('filter-scholarship');
    this.sortSelect = document.getElementById('filter-sort');
    this.stateFilter = document.getElementById('filter-state');
    this.feeFilter = document.getElementById('filter-fee');
    this.nirfFilter = document.getElementById('filter-nirf');
    this.resetBtn = document.getElementById('reset-college-filters');
    this.bookmarkTabBtn = document.getElementById('tab-college-bookmarks');
    this.allTabBtn = document.getElementById('tab-college-all');
    this.openScholarshipModalBtn = document.getElementById('open-scholarship-modal-btn');

    // Modals & Dock
    this.dock = document.getElementById('comparison-dock');
    this.dockChips = document.getElementById('dock-chips');
    this.dockCompareBtn = document.getElementById('dock-compare-btn');
    this.dockClearBtn = document.getElementById('dock-clear-btn');
    this.detailModal = document.getElementById('college-detail-modal');
    this.compareModal = document.getElementById('college-compare-modal');
    this.scholarshipModal = document.getElementById('scholarship-hub-modal');
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase().trim();
        this.applyFilters();
      });
    }

    if (this.streamFilter) {
      this.streamFilter.addEventListener('change', (e) => {
        this.selectedStream = e.target.value;
        this.applyFilters();
      });
    }

    if (this.typeFilter) {
      this.typeFilter.addEventListener('change', (e) => {
        this.selectedType = e.target.value;
        this.applyFilters();
      });
    }

    if (this.degreeFilter) {
      this.degreeFilter.addEventListener('change', (e) => {
        this.selectedDegree = e.target.value;
        this.applyFilters();
      });
    }

    if (this.scaleFilter) {
      this.scaleFilter.addEventListener('change', (e) => {
        this.selectedCampusScale = e.target.value;
        this.applyFilters();
      });
    }

    if (this.scholarshipFilter) {
      this.scholarshipFilter.addEventListener('change', (e) => {
        this.selectedScholarship = e.target.value;
        this.applyFilters();
      });
    }

    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', (e) => {
        this.selectedSort = e.target.value;
        this.applyFilters();
      });
    }

    if (this.stateFilter) {
      this.stateFilter.addEventListener('change', (e) => {
        this.selectedState = e.target.value;
        this.applyFilters();
      });
    }

    if (this.feeFilter) {
      this.feeFilter.addEventListener('change', (e) => {
        this.selectedFeeMax = e.target.value;
        this.applyFilters();
      });
    }

    if (this.nirfFilter) {
      this.nirfFilter.addEventListener('change', (e) => {
        this.selectedNirf = e.target.value;
        this.applyFilters();
      });
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetFilters());
    }

    if (this.allTabBtn) {
      this.allTabBtn.addEventListener('click', () => {
        this.viewMode = 'all';
        this.allTabBtn.classList.add('active');
        if (this.bookmarkTabBtn) this.bookmarkTabBtn.classList.remove('active');
        this.applyFilters();
      });
    }

    if (this.bookmarkTabBtn) {
      this.bookmarkTabBtn.addEventListener('click', () => {
        this.viewMode = 'bookmarks';
        this.bookmarkTabBtn.classList.add('active');
        if (this.allTabBtn) this.allTabBtn.classList.remove('active');
        this.applyFilters();
      });
    }

    if (this.openScholarshipModalBtn) {
      this.openScholarshipModalBtn.addEventListener('click', () => this.openScholarshipDirectoryModal());
    }

    if (this.dockCompareBtn) {
      this.dockCompareBtn.addEventListener('click', () => this.openComparisonModal());
    }

    if (this.dockClearBtn) {
      this.dockClearBtn.addEventListener('click', () => {
        this.comparisonList = [];
        this.saveComparisonList();
        this.updateComparisonDock();
        this.renderColleges();
        this.app.showToast('Comparison list cleared', 'info');
      });
    }
  }

  populateStateFilter() {
    if (!this.stateFilter) return;
    const states = [...new Set(this.colleges.map(c => c.state))].sort();
    states.forEach(st => {
      const opt = document.createElement('option');
      opt.value = st;
      opt.textContent = st;
      this.stateFilter.appendChild(opt);
    });
  }

  applyFilters() {
    this.filteredColleges = this.colleges.filter(college => {
      // Bookmarks Filter
      if (this.viewMode === 'bookmarks' && !this.bookmarkedList.includes(college.id)) {
        return false;
      }

      // Search matching name, city, state, recruiters, degrees, fests, or scholarships
      const matchSearch = !this.searchTerm ||
        college.name.toLowerCase().includes(this.searchTerm) ||
        college.city.toLowerCase().includes(this.searchTerm) ||
        college.state.toLowerCase().includes(this.searchTerm) ||
        (college.instituteType && college.instituteType.toLowerCase().includes(this.searchTerm)) ||
        (college.degreesOffered && college.degreesOffered.some(d => d.toLowerCase().includes(this.searchTerm))) ||
        (college.scholarships && college.scholarships.some(s => s.name.toLowerCase().includes(this.searchTerm))) ||
        college.topRecruiters.some(r => r.toLowerCase().includes(this.searchTerm));

      // Stream matching
      const matchStream = this.selectedStream === 'all' || college.stream.toLowerCase() === this.selectedStream.toLowerCase();

      // Institute Type matching
      let matchType = true;
      if (this.selectedType !== 'all') {
        const typeStr = (college.instituteType || '').toLowerCase();
        if (this.selectedType === 'govt') {
          matchType = typeStr.includes('government') && !typeStr.includes('state government');
        } else if (this.selectedType === 'state-govt') {
          matchType = typeStr.includes('state government') || typeStr.includes('state public');
        } else if (this.selectedType === 'private') {
          matchType = typeStr.includes('private') || typeStr.includes('deemed');
        } else if (this.selectedType === 'autonomous') {
          matchType = typeStr.includes('autonomous') || typeStr.includes('partnership');
        }
      }

      // Degree matching
      let matchDegree = true;
      if (this.selectedDegree !== 'all') {
        const degrees = (college.degreesOffered || []).map(d => d.toLowerCase());
        if (this.selectedDegree === 'btech') matchDegree = degrees.some(d => d.includes('b.tech') || d.includes('b.e.'));
        else if (this.selectedDegree === 'dual') matchDegree = degrees.some(d => d.includes('dual degree'));
        else if (this.selectedDegree === 'mbbs') matchDegree = degrees.some(d => d.includes('mbbs') || d.includes('medical'));
        else if (this.selectedDegree === 'mba') matchDegree = degrees.some(d => d.includes('mba') || d.includes('pgdm'));
        else if (this.selectedDegree === 'bsc') matchDegree = degrees.some(d => d.includes('b.sc') || d.includes('bs '));
        else if (this.selectedDegree === 'ba') matchDegree = degrees.some(d => d.includes('b.a.'));
        else if (this.selectedDegree === 'bdes') matchDegree = degrees.some(d => d.includes('b.des'));
        else if (this.selectedDegree === 'law') matchDegree = degrees.some(d => d.includes('ll.b') || d.includes('law'));
        else if (this.selectedDegree === 'mca') matchDegree = degrees.some(d => d.includes('mca') || d.includes('bca'));
      }

      // Campus Scale (Small/Boutique vs Mid vs Mega)
      let matchScale = true;
      if (this.selectedCampusScale !== 'all') {
        const acres = college.campusSizeAcres || 0;
        if (this.selectedCampusScale === 'boutique') matchScale = acres > 0 && acres <= 50;
        else if (this.selectedCampusScale === 'mid') matchScale = acres > 50 && acres <= 300;
        else if (this.selectedCampusScale === 'mega') matchScale = acres > 300;
      }

      // Scholarship Availability
      let matchScholarship = true;
      if (this.selectedScholarship !== 'all') {
        if (this.selectedScholarship === 'full-waiver') {
          matchScholarship = college.scholarships && college.scholarships.some(s => s.benefit.toLowerCase().includes('100%') || s.benefit.toLowerCase().includes('full tuition'));
        } else if (this.selectedScholarship === 'merit') {
          matchScholarship = college.scholarships && college.scholarships.length > 0;
        }
      }

      // State matching
      const matchState = this.selectedState === 'all' || college.state === this.selectedState;

      // Fee matching
      let matchFee = true;
      if (this.selectedFeeMax !== 'all') {
        const maxFee = parseInt(this.selectedFeeMax, 10);
        matchFee = college.annualTuitionFee <= maxFee;
      }

      // NIRF Tier matching
      let matchNirf = true;
      if (this.selectedNirf === 'top5') matchNirf = college.nirfRank <= 5;
      else if (this.selectedNirf === 'top20') matchNirf = college.nirfRank <= 20;
      else if (this.selectedNirf === 'top50') matchNirf = college.nirfRank <= 50;

      return matchSearch && matchStream && matchType && matchDegree && matchScale && matchScholarship && matchState && matchFee && matchNirf;
    });

    // Apply Sorting
    this.filteredColleges.sort((a, b) => {
      if (this.selectedSort === 'size-asc') return (a.campusSizeAcres || 0) - (b.campusSizeAcres || 0);
      if (this.selectedSort === 'size-desc') return (b.campusSizeAcres || 0) - (a.campusSizeAcres || 0);
      if (this.selectedSort === 'fee-asc') return a.annualTuitionFee - b.annualTuitionFee;
      if (this.selectedSort === 'placement-desc') return b.medianPackage - a.medianPackage;
      if (this.selectedSort === 'intake-asc') return (a.studentIntake || 0) - (b.studentIntake || 0);
      return a.nirfRank - b.nirfRank; // Default NIRF Ascending
    });

    this.renderColleges();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedStream = 'all';
    this.selectedType = 'all';
    this.selectedDegree = 'all';
    this.selectedCampusScale = 'all';
    this.selectedScholarship = 'all';
    this.selectedSort = 'nirf';
    this.selectedState = 'all';
    this.selectedFeeMax = 'all';
    this.selectedNirf = 'all';

    if (this.searchInput) this.searchInput.value = '';
    if (this.streamFilter) this.streamFilter.value = 'all';
    if (this.typeFilter) this.typeFilter.value = 'all';
    if (this.degreeFilter) this.degreeFilter.value = 'all';
    if (this.scaleFilter) this.scaleFilter.value = 'all';
    if (this.scholarshipFilter) this.scholarshipFilter.value = 'all';
    if (this.sortSelect) this.sortSelect.value = 'nirf';
    if (this.stateFilter) this.stateFilter.value = 'all';
    if (this.feeFilter) this.feeFilter.value = 'all';
    if (this.nirfFilter) this.nirfFilter.value = 'all';

    this.applyFilters();
    this.app.showToast('All college filters reset to default', 'info');
  }

  renderColleges() {
    if (!this.gridElement) return;

    if (this.filteredColleges.length === 0) {
      this.gridElement.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-surface-elevated); border-radius: var(--radius-md); border: 1px dashed var(--border-medium);">
          <i class="fas fa-university" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
          <h3 style="font-size: 1.2rem; font-weight: 700;">No colleges match your criteria</h3>
          <p style="color: var(--text-secondary); margin-top: 6px;">Try adjusting Campus Scale (Small/Mega), Degree, or Fee threshold.</p>
          <button class="btn btn-primary btn-sm" style="margin-top: 16px;" id="empty-state-reset-btn"><i class="fas fa-undo"></i> Reset All Filters</button>
        </div>
      `;
      const emptyBtn = document.getElementById('empty-state-reset-btn');
      if (emptyBtn) emptyBtn.addEventListener('click', () => this.resetFilters());
      return;
    }

    this.gridElement.innerHTML = this.filteredColleges.map(c => {
      const isCompared = this.comparisonList.includes(c.id);
      const isBookmarked = this.bookmarkedList.includes(c.id);
      const feeFormatted = (c.annualTuitionFee / 100000).toFixed(1) + ' Lakh/yr';
      const ctcFormatted = (c.medianPackage / 100000).toFixed(1) + ' LPA';

      // Type Badge styling
      let typeBadgeClass = 'badge-primary';
      let typeIcon = 'fa-university';
      if (c.instituteType && c.instituteType.toLowerCase().includes('government')) {
        typeBadgeClass = 'badge-gov';
        typeIcon = 'fa-landmark';
      } else if (c.instituteType && c.instituteType.toLowerCase().includes('private')) {
        typeBadgeClass = 'badge-private';
        typeIcon = 'fa-shield-alt';
      } else if (c.instituteType && c.instituteType.toLowerCase().includes('autonomous')) {
        typeBadgeClass = 'badge-auto';
        typeIcon = 'fa-award';
      }

      // Campus Scale Icon
      const scaleIcon = c.campusSizeAcres <= 50 ? '🔬 Boutique' : c.campusSizeAcres > 300 ? '🏰 Mega' : '🏫 Mid';

      return `
        <div class="college-card" data-college-id="${c.id}">
          <div class="college-card-img-wrap">
            <img src="${c.image}" alt="${c.shortName}" class="college-card-img" loading="lazy">
            <span class="nirf-rank-badge"><i class="fas fa-trophy"></i> NIRF #${c.nirfRank}</span>
            <span class="college-stream-badge">${c.stream}</span>
          </div>
          <div class="college-card-body">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; gap: 6px;">
              <span class="inst-type-pill ${typeBadgeClass}"><i class="fas ${typeIcon}"></i> ${c.instituteType ? c.instituteType.split('/')[0].trim() : 'Institute'}</span>
              <span class="campus-scale-pill"><i class="fas fa-map"></i> ${scaleIcon} (${c.campusSizeAcres || 0} Ac.)</span>
            </div>
            
            <h3 class="college-name">${c.name}</h3>
            <div class="college-location">
              <i class="fas fa-map-marker-alt"></i> ${c.city}, ${c.state}
            </div>

            <div class="degrees-offered-row">
              ${(c.degreesOffered || ['B.Tech']).slice(0, 3).map(deg => `<span class="degree-pill"><i class="fas fa-graduation-cap"></i> ${deg}</span>`).join('')}
              ${c.degreesOffered && c.degreesOffered.length > 3 ? `<span class="degree-pill-more">+${c.degreesOffered.length - 3} more</span>` : ''}
            </div>

            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-lbl">Tuition Fee</span>
                <span class="spec-val">₹${feeFormatted}</span>
              </div>
              <div class="spec-item">
                <span class="spec-lbl">Median Placement</span>
                <span class="spec-val highlight-green">₹${ctcFormatted}</span>
              </div>
              <div class="spec-item">
                <span class="spec-lbl">Student-Faculty</span>
                <span class="spec-val">${c.studentFacultyRatio || '1:10'}</span>
              </div>
              <div class="spec-item">
                <span class="spec-lbl">Attendance</span>
                <span class="spec-val" style="color: var(--brand-accent); font-size: 0.78rem;">${c.attendancePolicy ? c.attendancePolicy.split(' ')[0] : '75%'}</span>
              </div>
            </div>

            <!-- Scholarship Highlight Banner -->
            ${c.scholarships && c.scholarships.length > 0 ? `
              <div class="card-scholarship-banner">
                <i class="fas fa-hand-holding-usd" style="color: var(--success);"></i>
                <span title="${c.scholarships[0].benefit}"><strong>Scholarship:</strong> ${c.scholarships[0].name} (${c.scholarships[0].benefit.slice(0, 35)}...)</span>
              </div>
            ` : ''}

            <div class="college-card-footer">
              <button class="btn btn-primary btn-sm view-detail-btn" data-id="${c.id}" style="flex: 1;">
                <i class="fas fa-info-circle"></i> Student & College Guide
              </button>
              <button class="btn ${isCompared ? 'btn-primary' : 'btn-secondary'} btn-sm toggle-compare-btn" data-id="${c.id}" title="${isCompared ? 'Remove from Comparison' : 'Add to Compare'}">
                <i class="fas fa-exchange-alt"></i> ${isCompared ? 'Added' : 'Compare'}
              </button>
              <button class="btn btn-secondary btn-sm toggle-bookmark-btn" data-id="${c.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark College'}">
                <i class="${isBookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'}" style="${isBookmarked ? 'color: var(--brand-accent);' : ''}"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.attachCardEventListeners();
  }

  attachCardEventListeners() {
    this.gridElement.querySelectorAll('.view-detail-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openCollegeDetailModal(id);
      });
    });

    this.gridElement.querySelectorAll('.toggle-compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.toggleCompare(id);
      });
    });

    this.gridElement.querySelectorAll('.toggle-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.toggleBookmark(id);
      });
    });
  }

  toggleCompare(collegeId) {
    const idx = this.comparisonList.indexOf(collegeId);
    if (idx > -1) {
      this.comparisonList.splice(idx, 1);
      this.app.showToast('Removed college from comparison', 'info');
    } else {
      if (this.comparisonList.length >= 3) {
        this.app.showToast('You can compare a maximum of 3 colleges simultaneously', 'warning');
        return;
      }
      this.comparisonList.push(collegeId);
      const col = this.colleges.find(c => c.id === collegeId);
      this.app.showToast(`Added ${col?.shortName || 'College'} to comparison drawer`, 'success');
    }

    this.saveComparisonList();
    this.updateComparisonDock();
    this.renderColleges();
  }

  toggleBookmark(collegeId) {
    const idx = this.bookmarkedList.indexOf(collegeId);
    const col = this.colleges.find(c => c.id === collegeId);
    if (idx > -1) {
      this.bookmarkedList.splice(idx, 1);
      this.app.showToast(`Removed ${col?.shortName || 'College'} from bookmarks`, 'info');
    } else {
      this.bookmarkedList.push(collegeId);
      this.app.showToast(`Bookmarked ${col?.shortName || 'College'}`, 'success');
    }

    this.saveBookmarks();
    this.renderColleges();
  }

  updateComparisonDock() {
    if (!this.dock || !this.dockChips) return;

    if (this.comparisonList.length > 0) {
      this.dock.classList.add('visible');
      this.dockChips.innerHTML = this.comparisonList.map(id => {
        const col = this.colleges.find(c => c.id === id);
        return `
          <div class="dock-chip">
            <span>${col ? col.shortName : id}</span>
            <i class="fas fa-times remove-chip" data-id="${id}"></i>
          </div>
        `;
      }).join('');

      this.dockChips.querySelectorAll('.remove-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          this.toggleCompare(id);
        });
      });
    } else {
      this.dock.classList.remove('visible');
    }
  }

  openCollegeDetailModal(collegeId) {
    const college = this.colleges.find(c => c.id === collegeId);
    if (!college || !this.detailModal) return;

    const modalBody = this.detailModal.querySelector('.modal-body');
    const modalTitle = this.detailModal.querySelector('.modal-title');
    if (modalTitle) modalTitle.textContent = `${college.shortName} — Student & College Guide`;

    const feeFormatted = (college.annualTuitionFee / 100000).toFixed(2) + ' Lakh / year';
    const hostelFormatted = (college.hostelFee / 100000).toFixed(2) + ' Lakh / year';
    const medianPackage = (college.medianPackage / 100000).toFixed(2) + ' LPA';
    const highestPackage = (college.highestPackage / 10000000).toFixed(2) + ' Cr';

    modalBody.innerHTML = `
      <div class="detail-hero-banner" style="background-image: url('${college.image}');">
        <div class="detail-hero-overlay"></div>
        <div class="detail-hero-info">
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
            <span class="badge badge-primary">${college.badge}</span>
            <span class="badge badge-neutral" style="background: rgba(0,0,0,0.65); color: #fff;"><i class="fas fa-landmark"></i> ${college.instituteType}</span>
            <span class="badge badge-neutral" style="background: rgba(0,0,0,0.65); color: #38bdf8;"><i class="fas fa-map"></i> ${college.campusScale}</span>
          </div>
          <h2>${college.name}</h2>
          <p style="color: #cbd5e1;"><i class="fas fa-map-marker-alt"></i> ${college.city}, ${college.state} • Est. ${college.established}</p>
        </div>
      </div>

      <!-- Detail Sub-Navigation Tabs -->
      <div class="modal-inner-tabs-bar">
        <button class="modal-tab-btn active" data-tab="overview"><i class="fas fa-chart-line"></i> Overview & Stats</button>
        <button class="modal-tab-btn" data-tab="scholarships"><i class="fas fa-hand-holding-usd"></i> Scholarships & Aid</button>
        <button class="modal-tab-btn" data-tab="student-life"><i class="fas fa-campground"></i> Campus Life & Hostels</button>
        <button class="modal-tab-btn" data-tab="admissions"><i class="fas fa-door-open"></i> Admissions & Cutoffs</button>
      </div>

      <!-- Tab Pane 1: Overview -->
      <div class="modal-tab-pane active" id="modal-tab-overview">
        <div class="detail-section-block">
          <h4><i class="fas fa-graduation-cap" style="color: var(--brand-primary);"></i> Degrees & Programs Offered</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${(college.degreesOffered || ['B.Tech']).map(d => `<span class="badge badge-primary" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fas fa-check"></i> ${d}</span>`).join('')}
          </div>
        </div>

        <div class="detail-section-block">
          <h4><i class="fas fa-balance-scale" style="color: var(--brand-secondary);"></i> Key Institutional & Financial Metrics</h4>
          <div class="specs-grid" style="grid-template-columns: repeat(4, 1fr); padding: 16px;">
            <div class="spec-item">
              <span class="spec-lbl">NIRF Ranking</span>
              <span class="spec-val" style="color: var(--brand-secondary);">#${college.nirfRank}</span>
            </div>
            <div class="spec-item">
              <span class="spec-lbl">Median Package</span>
              <span class="spec-val highlight-green">₹${medianPackage}</span>
            </div>
            <div class="spec-item">
              <span class="spec-lbl">Tuition Fee</span>
              <span class="spec-val">₹${feeFormatted}</span>
            </div>
            <div class="spec-item">
              <span class="spec-lbl">Campus Acreage</span>
              <span class="spec-val">${college.campusSize}</span>
            </div>
          </div>
        </div>

        <div class="detail-section-block">
          <h4><i class="fas fa-calculator" style="color: var(--success);"></i> Degree ROI & Investment Breakeven</h4>
          <div style="background: var(--bg-surface-elevated); padding: 16px; border-radius: var(--radius-sm); border-left: 4px solid var(--success);">
            <p><strong>Estimated Breakeven Time:</strong> <span style="color: var(--success); font-weight: 700;">${college.roiBreakevenMonths || '2.0 Months'}</span></p>
            <p style="font-size: 0.84rem; color: var(--text-secondary); margin-top: 4px;">Time required to recover 4-year total tuition investment based on median annual salary upon graduation.</p>
          </div>
        </div>

        <div class="detail-section-block">
          <h4><i class="fas fa-book-reader" style="color: var(--brand-accent);"></i> Academic Pedagogy & Profile</h4>
          <p style="color: var(--text-secondary); line-height: 1.6;">${college.description}</p>
        </div>
      </div>

      <!-- Tab Pane 2: Scholarships & Aid -->
      <div class="modal-tab-pane" id="modal-tab-scholarships" style="display: none;">
        <div class="detail-section-block">
          <h4><i class="fas fa-donate" style="color: var(--success);"></i> Institutional & Government Fee Waivers</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${(college.scholarships || []).map(sch => `
              <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); padding: 16px; border-radius: var(--radius-sm);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                  <strong style="font-size: 0.96rem; color: var(--brand-primary);">${sch.name}</strong>
                  <span class="badge badge-success"><i class="fas fa-check-circle"></i> Fee Waiver</span>
                </div>
                <p style="font-size: 0.88rem; color: var(--text-primary); margin-bottom: 4px;"><strong>Benefit:</strong> ${sch.benefit}</p>
                <p style="font-size: 0.82rem; color: var(--text-muted);"><strong>Eligibility Criteria:</strong> ${sch.eligibility}</p>
              </div>
            `).join('')}
            ${(!college.scholarships || college.scholarships.length === 0) ? `
              <p style="color: var(--text-muted);">National Scholarship Portal (NSP) and State Govt Post-Matric schemes applicable.</p>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Tab Pane 3: Student Campus Life & Hostels -->
      <div class="modal-tab-pane" id="modal-tab-student-life" style="display: none;">
        <div class="detail-section-block">
          <h4><i class="fas fa-shield-alt" style="color: var(--brand-primary);"></i> Student Life & Campus Experience</h4>
          <div class="specs-grid" style="grid-template-columns: repeat(3, 1fr); padding: 16px; margin-bottom: 16px;">
            <div class="spec-item">
              <span class="spec-lbl">Student-Faculty Ratio</span>
              <span class="spec-val">${college.studentFacultyRatio || '1:10'}</span>
            </div>
            <div class="spec-item">
              <span class="spec-lbl">Attendance Policy</span>
              <span class="spec-val" style="color: var(--brand-accent);">${college.attendancePolicy || '75% Strict'}</span>
            </div>
            <div class="spec-item">
              <span class="spec-lbl">Hostel & Mess Rating</span>
              <span class="spec-val" style="color: #38bdf8;">⭐ ${college.hostelRating || 4.5} / 5.0</span>
            </div>
          </div>

          <div style="background: var(--bg-surface-elevated); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 16px;">
            <strong style="font-size: 0.92rem;"><i class="fas fa-guitar" style="color: #ec4899;"></i> Flagship Cultural & Technical Fests:</strong>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px;">${college.fests || 'Annual Tech and Cultural Festivals'}</p>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid var(--border-highlight); padding: 16px; border-radius: var(--radius-sm);">
            <strong style="font-size: 0.92rem; color: var(--brand-primary);"><i class="fas fa-lightbulb"></i> Student Insider Advice:</strong>
            <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 4px;">${college.insiderTips || 'Connect with seniors and active student clubs early in your freshman year.'}</p>
          </div>
        </div>

        <div class="detail-section-block">
          <h4><i class="fas fa-building" style="color: #10b981;"></i> Campus Facilities & Infrastructure</h4>
          <div class="facilities-grid">
            ${college.facilities.map(f => `
              <div class="facility-item">
                <i class="fas fa-check-circle"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Tab Pane 4: Admissions & Cutoffs -->
      <div class="modal-tab-pane" id="modal-tab-admissions" style="display: none;">
        <div class="detail-section-block">
          <h4><i class="fas fa-university" style="color: var(--brand-accent);"></i> Admission & Counseling Timeline</h4>
          <div style="background: var(--bg-surface-elevated); padding: 16px; border-radius: var(--radius-sm); border-left: 4px solid var(--brand-accent);">
            <p><strong>Entrance Exams Accepted:</strong> ${college.entranceExams.join(', ')}</p>
            <p style="margin-top: 6px;"><strong>Cutoff Estimate:</strong> ${college.cutoffEstimate}</p>
            <p style="margin-top: 6px;"><strong>Eligibility Criteria:</strong> ${college.eligibility}</p>
            <p style="margin-top: 6px;"><strong>Counseling Schedule:</strong> ${college.counselingTimeline}</p>
          </div>
        </div>

        <div class="detail-section-block">
          <h4><i class="fas fa-briefcase" style="color: #6366f1;"></i> Top Campus Recruiters</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${college.topRecruiters.map(r => `<span class="badge badge-neutral" style="font-size: 0.85rem; padding: 6px 12px;">${r}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    // Attach Inner Tab Handlers
    modalBody.querySelectorAll('.modal-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        const tabKey = e.currentTarget.getAttribute('data-tab');
        modalBody.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        modalBody.querySelectorAll('.modal-tab-pane').forEach(p => {
          p.style.display = p.id === `modal-tab-${tabKey}` ? 'block' : 'none';
        });
      });
    });

    this.detailModal.classList.add('open');
  }

  openScholarshipDirectoryModal() {
    if (!this.scholarshipModal) return;
    const modalBody = this.scholarshipModal.querySelector('.modal-body');

    modalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;"><i class="fas fa-award" style="color: var(--brand-accent);"></i> National & Institutional Scholarship Directory</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">Browse premier government, corporate, and merit-cum-means financial aid programs providing up to 100% full tuition refunds.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${this.scholarships.map(sch => `
          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 10px;">
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--brand-primary);">${sch.name}</h3>
                <div style="font-size: 0.82rem; color: var(--text-muted);"><i class="fas fa-university"></i> ${sch.provider}</div>
              </div>
              <span class="badge badge-success" style="font-size: 0.82rem; padding: 4px 10px;">${sch.amount.split('(')[0]}</span>
            </div>

            <p style="font-size: 0.88rem; color: var(--text-primary); margin-bottom: 8px;"><strong>Eligibility:</strong> ${sch.eligibility}</p>
            <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 12px;"><strong>Coverage:</strong> ${sch.coverage}</p>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 10px;">
              <span style="font-size: 0.78rem; color: var(--brand-accent); font-weight: 600;"><i class="far fa-calendar-alt"></i> Deadline: ${sch.deadline}</span>
              <a href="${sch.applyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                Apply on Official Portal <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.scholarshipModal.classList.add('open');
  }

  openComparisonModal() {
    if (this.comparisonList.length < 2) {
      this.app.showToast('Please select at least 2 colleges to compare', 'warning');
      return;
    }

    const comparedColleges = this.comparisonList.map(id => this.colleges.find(c => c.id === id)).filter(Boolean);
    const modalBody = this.compareModal.querySelector('.modal-body');

    modalBody.innerHTML = `
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="table-row-label">Comparison Metric</th>
              ${comparedColleges.map(c => `<th class="table-header-col">${c.shortName}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-row-label">Ownership & Type</td>
              ${comparedColleges.map(c => `<td><strong>${c.instituteType || 'University'}</strong></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Campus Acreage & Scale</td>
              ${comparedColleges.map(c => `<td><span class="badge badge-info">${c.campusScale} (${c.campusSizeAcres || 0} Acres)</span></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Degrees & Programs</td>
              ${comparedColleges.map(c => `<td><span style="font-size: 0.82rem; color: var(--brand-secondary);">${(c.degreesOffered || ['B.Tech']).join(', ')}</span></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">NIRF Rank</td>
              ${comparedColleges.map(c => `<td><strong>#${c.nirfRank}</strong></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Annual Tuition Fee</td>
              ${comparedColleges.map(c => `<td>₹${(c.annualTuitionFee/100000).toFixed(2)} Lakh</td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Median Placement CTC</td>
              ${comparedColleges.map(c => `<td style="color: var(--success); font-weight: 700;">₹${(c.medianPackage/100000).toFixed(2)} LPA</td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Degree Breakeven Time</td>
              ${comparedColleges.map(c => `<td><strong style="color: var(--success);">${c.roiBreakevenMonths || '2.0 Months'}</strong></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Attendance Policy</td>
              ${comparedColleges.map(c => `<td><span style="color: var(--brand-accent);">${c.attendancePolicy}</span></td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Scholarships Available</td>
              ${comparedColleges.map(c => `<td>${c.scholarships && c.scholarships.length > 0 ? `<span class="badge badge-success">${c.scholarships[0].name}</span>` : 'NSP Govt Aid'}</td>`).join('')}
            </tr>
            <tr>
              <td class="table-row-label">Cutoff Criteria</td>
              ${comparedColleges.map(c => `<td>${c.cutoffEstimate}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    this.compareModal.classList.add('open');
  }

  loadComparisonList() {
    try {
      const saved = localStorage.getItem('antigravity_comparison');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveComparisonList() {
    try {
      localStorage.setItem('antigravity_comparison', JSON.stringify(this.comparisonList));
    } catch (e) {
      console.error(e);
    }
  }

  loadBookmarks() {
    try {
      const saved = localStorage.getItem('antigravity_college_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveBookmarks() {
    try {
      localStorage.setItem('antigravity_college_bookmarks', JSON.stringify(this.bookmarkedList));
    } catch (e) {
      console.error(e);
    }
  }
}
