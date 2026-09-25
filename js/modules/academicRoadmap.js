/**
 * Module 2: Academic System & Course Visualizer
 */
import { ACADEMIC_ROADMAPS, GRADING_SYSTEM_INFO } from '../data/mockData.js';

export class AcademicRoadmap {
  constructor(app) {
    this.app = app;
    this.roadmaps = ACADEMIC_ROADMAPS;
    this.gradingInfo = GRADING_SYSTEM_INFO;
    this.activeMajorKey = 'cse';
    this.selectedCourseCode = null;
    this.activeSubTab = 'roadmap'; // 'roadmap' or 'grading'
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.renderRoadmap();
    this.renderGradingGuide();
    this.initConverter();
  }

  cacheDOM() {
    this.container = document.getElementById('view-academic');
    this.majorSelect = document.getElementById('academic-major-select');
    this.timelineContainer = document.getElementById('semester-timeline-container');
    this.tabRoadmap = document.getElementById('tab-academic-roadmap');
    this.tabGrading = document.getElementById('tab-academic-grading');
    this.paneRoadmap = document.getElementById('pane-academic-roadmap');
    this.paneGrading = document.getElementById('pane-academic-grading');

    // Converter elements
    this.convInput = document.getElementById('grade-converter-input');
    this.convType = document.getElementById('grade-converter-type');
    this.res10pt = document.getElementById('conv-res-10pt');
    this.res4pt = document.getElementById('conv-res-4pt');
    this.resPct = document.getElementById('conv-res-pct');
  }

  bindEvents() {
    if (this.majorSelect) {
      this.majorSelect.addEventListener('change', (e) => {
        this.activeMajorKey = e.target.value;
        this.selectedCourseCode = null;
        this.renderRoadmap();
      });
    }

    if (this.tabRoadmap) {
      this.tabRoadmap.addEventListener('click', () => {
        this.activeSubTab = 'roadmap';
        this.tabRoadmap.classList.add('active');
        this.tabRoadmap.classList.add('btn-primary');
        this.tabRoadmap.classList.remove('btn-secondary');

        if (this.tabGrading) {
          this.tabGrading.classList.remove('active');
          this.tabGrading.classList.remove('btn-primary');
          this.tabGrading.classList.add('btn-secondary');
        }

        if (this.paneRoadmap) {
          this.paneRoadmap.classList.add('active');
          this.paneRoadmap.style.display = 'block';
        }
        if (this.paneGrading) {
          this.paneGrading.classList.remove('active');
          this.paneGrading.style.display = 'none';
        }
      });
    }

    if (this.tabGrading) {
      this.tabGrading.addEventListener('click', () => {
        this.activeSubTab = 'grading';
        this.tabGrading.classList.add('active');
        this.tabGrading.classList.add('btn-primary');
        this.tabGrading.classList.remove('btn-secondary');

        if (this.tabRoadmap) {
          this.tabRoadmap.classList.remove('active');
          this.tabRoadmap.classList.remove('btn-primary');
          this.tabRoadmap.classList.add('btn-secondary');
        }

        if (this.paneGrading) {
          this.paneGrading.classList.add('active');
          this.paneGrading.style.display = 'block';
        }
        if (this.paneRoadmap) {
          this.paneRoadmap.classList.remove('active');
          this.paneRoadmap.style.display = 'none';
        }
      });
    }

    if (this.convInput && this.convType) {
      this.convInput.addEventListener('input', () => this.runConversion());
      this.convType.addEventListener('change', () => this.runConversion());
    }
  }

  renderRoadmap() {
    if (!this.timelineContainer) return;
    const majorData = this.roadmaps[this.activeMajorKey];
    if (!majorData) return;

    this.timelineContainer.innerHTML = majorData.semesters.map(sem => {
      const totalSemCredits = sem.courses.reduce((acc, c) => acc + c.credits, 0);

      return `
        <div class="semester-block">
          <div class="semester-header">
            <h3>${sem.title}</h3>
            <span class="semester-credits-badge"><i class="fas fa-layer-group"></i> ${totalSemCredits} Credits</span>
          </div>
          <div class="courses-row-grid">
            ${sem.courses.map(course => {
              const isSelected = this.selectedCourseCode === course.code;
              const typeClass = `type-${course.type.toLowerCase()}`;
              return `
                <div class="course-card-item ${isSelected ? 'highlighted-selected' : ''}" data-course-code="${course.code}" data-prereq="${course.prereq}">
                  <div class="course-top-meta">
                    <span class="course-code">${course.code}</span>
                    <span class="course-type-pill ${typeClass}">${course.type}</span>
                  </div>
                  <h4 class="course-name">${course.name}</h4>
                  <p class="course-desc-snip">${course.desc}</p>
                  <div class="course-bottom-meta">
                    <span><i class="fas fa-coins"></i> ${course.credits} Credits ${course.lab ? '• 🧪 Lab' : ''}</span>
                    <span class="course-prereq-tag">
                      ${course.prereq !== 'None' ? `Prereq: ${course.prereq}` : 'No Prereq'}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    this.attachCourseCardListeners();
  }

  attachCourseCardListeners() {
    const cards = this.timelineContainer.querySelectorAll('.course-card-item');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const code = card.getAttribute('data-course-code');
        const prereq = card.getAttribute('data-prereq');

        if (this.selectedCourseCode === code) {
          // Deselect
          this.selectedCourseCode = null;
          cards.forEach(c => {
            c.classList.remove('highlighted-selected', 'highlighted-prereq');
          });
          this.app.showToast('Cleared prerequisite focus', 'info');
        } else {
          this.selectedCourseCode = code;
          cards.forEach(c => {
            c.classList.remove('highlighted-selected', 'highlighted-prereq');
            const cCode = c.getAttribute('data-course-code');
            const cPrereq = c.getAttribute('data-prereq');

            if (cCode === code) {
              c.classList.add('highlighted-selected');
            } else if (cCode === prereq || (cPrereq && cPrereq.includes(code))) {
              c.classList.add('highlighted-prereq');
            }
          });

          if (prereq && prereq !== 'None') {
            this.app.showToast(`Focused: ${code} (Prerequisite: ${prereq})`, 'info');
          } else {
            this.app.showToast(`Focused: ${code}`, 'info');
          }
        }
      });
    });
  }

  renderGradingGuide() {
    const tableBody = document.getElementById('grading-scale-tbody');
    if (!tableBody) return;

    tableBody.innerHTML = this.gradingInfo.scales.map(row => `
      <tr>
        <td><strong>${row.grade}</strong></td>
        <td><span class="grade-point-badge">${row.points}</span></td>
        <td>${row.range}</td>
        <td>${row.gpa4Scale.toFixed(1)}</td>
        <td style="color: var(--text-secondary); font-size: 0.82rem;">${row.descriptor}</td>
      </tr>
    `).join('');
  }

  initConverter() {
    if (this.convInput) {
      this.convInput.value = '8.5';
      this.runConversion();
    }
  }

  runConversion() {
    if (!this.convInput || !this.res10pt || !this.res4pt || !this.resPct) return;
    const rawVal = parseFloat(this.convInput.value);
    const type = this.convType ? this.convType.value : 'cgpa10';

    if (isNaN(rawVal) || rawVal < 0) {
      this.res10pt.textContent = '--';
      this.res4pt.textContent = '--';
      this.resPct.textContent = '--';
      return;
    }

    let cgpa10 = 0;
    if (type === 'cgpa10') {
      cgpa10 = Math.min(10, rawVal);
    } else if (type === 'gpa4') {
      cgpa10 = Math.min(10, (rawVal / 4) * 10);
    } else if (type === 'pct') {
      cgpa10 = Math.min(10, (rawVal + 7.5) / 10); // Standard AICTE percentage to CGPA formula
    }

    const gpa4 = Math.min(4.0, (cgpa10 / 10) * 4.0);
    const pct = Math.min(100, (cgpa10 * 10) - 7.5); // Standard AICTE formula: (CGPA * 10) - 7.5

    this.res10pt.textContent = cgpa10.toFixed(2);
    this.res4pt.textContent = gpa4.toFixed(2);
    this.resPct.textContent = `${Math.max(0, pct).toFixed(1)}%`;
  }
}
