/**
 * Module 4: Career & Campus Placement Center
 * (Recruitment Tracker with CGPA Eligibility Checker & Interview Question Bank)
 */
import { PLACEMENT_RECRUITERS, INTERVIEW_QUESTIONS } from '../data/mockData.js';

export class CareerPlacement {
  constructor(app) {
    this.app = app;
    this.recruiters = [...PLACEMENT_RECRUITERS];
    this.questions = [...INTERVIEW_QUESTIONS];
    this.userCGPA = 8.5; // Default student CGPA
    this.activeSubTab = 'recruiters'; // 'recruiters' or 'questions'

    // Question Bank Filters
    this.qSearchTerm = '';
    this.selectedCategory = 'all';
    this.selectedDifficulty = 'all';
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.renderRecruiters();
    this.renderQuestions();
  }

  cacheDOM() {
    this.container = document.getElementById('view-placement');
    this.tabRecruiters = document.getElementById('tab-placement-recruiters');
    this.tabQuestions = document.getElementById('tab-placement-questions');
    this.paneRecruiters = document.getElementById('pane-placement-recruiters');
    this.paneQuestions = document.getElementById('pane-placement-questions');

    // Recruiters DOM
    this.cgpaInput = document.getElementById('user-cgpa-eligibility-input');
    this.recruitersGrid = document.getElementById('recruiters-grid-container');

    // Questions DOM
    this.qSearchInput = document.getElementById('question-search-input');
    this.qCategoryFilter = document.getElementById('question-category-filter');
    this.qDifficultyFilter = document.getElementById('question-difficulty-filter');
    this.questionsAccordion = document.getElementById('questions-accordion-container');
  }

  bindEvents() {
    if (this.tabRecruiters) {
      this.tabRecruiters.addEventListener('click', () => {
        this.activeSubTab = 'recruiters';
        this.tabRecruiters.classList.add('active');
        if (this.tabQuestions) this.tabQuestions.classList.remove('active');
        if (this.paneRecruiters) this.paneRecruiters.classList.add('active');
        if (this.paneQuestions) this.paneQuestions.classList.remove('active');
      });
    }

    if (this.tabQuestions) {
      this.tabQuestions.addEventListener('click', () => {
        this.activeSubTab = 'questions';
        this.tabQuestions.classList.add('active');
        if (this.tabRecruiters) this.tabRecruiters.classList.remove('active');
        if (this.paneQuestions) this.paneQuestions.classList.add('active');
        if (this.paneRecruiters) this.paneRecruiters.classList.remove('active');
      });
    }

    if (this.cgpaInput) {
      this.cgpaInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.userCGPA = isNaN(val) ? 0 : val;
        this.renderRecruiters();
      });
    }

    if (this.qSearchInput) {
      this.qSearchInput.addEventListener('input', (e) => {
        this.qSearchTerm = e.target.value.toLowerCase().trim();
        this.renderQuestions();
      });
    }

    if (this.qCategoryFilter) {
      this.qCategoryFilter.addEventListener('change', (e) => {
        this.selectedCategory = e.target.value;
        this.renderQuestions();
      });
    }

    if (this.qDifficultyFilter) {
      this.qDifficultyFilter.addEventListener('change', (e) => {
        this.selectedDifficulty = e.target.value;
        this.renderQuestions();
      });
    }
  }

  renderRecruiters() {
    if (!this.recruitersGrid) return;

    this.recruitersGrid.innerHTML = this.recruiters.map(r => {
      const isEligible = this.userCGPA >= r.minCGPA;

      return `
        <div class="recruiter-card">
          <div class="recruiter-header">
            <div class="recruiter-logo-box" style="background: ${r.logoColor};">
              ${r.logoText}
            </div>
            <div class="recruiter-meta-top">
              <h3 class="recruiter-company">${r.company}</h3>
              <div class="recruiter-role">${r.role}</div>
            </div>
            <span class="badge badge-info">${r.openStatus}</span>
          </div>

          <div class="ctc-highlight-box">
            <div class="ctc-item">
              <span class="ctc-lbl">CTC Package</span>
              <span class="ctc-val">${r.ctcTotal}</span>
            </div>
            <div class="ctc-item">
              <span class="ctc-lbl">Base Salary</span>
              <span class="ctc-val" style="color: var(--text-primary);">${r.baseSalary}</span>
            </div>
            <div class="ctc-item">
              <span class="ctc-lbl">Intern Stipend</span>
              <span class="ctc-val" style="color: var(--brand-accent);">${r.internStipend}</span>
            </div>
          </div>

          <div class="eligibility-status-badge ${isEligible ? 'eligible' : 'ineligible'}">
            <i class="fas ${isEligible ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${isEligible ? `Eligible (Your CGPA: ${this.userCGPA.toFixed(2)} ≥ Min ${r.minCGPA})` : `Ineligible (Your CGPA: ${this.userCGPA.toFixed(2)} < Min ${r.minCGPA})`}
          </div>

          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">${r.description}</p>

          <div class="recruiter-rounds-list">
            <strong>Hiring Workflow Rounds:</strong>
            <ol>
              ${r.rounds.map(round => `<li>${round}</li>`).join('')}
            </ol>
          </div>

          <div class="recruiter-card-footer">
            <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="far fa-clock"></i> Deadline: ${r.deadline}</span>
            <a href="${r.applyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              Apply on Portal <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  renderQuestions() {
    if (!this.questionsAccordion) return;

    const filtered = this.questions.filter(q => {
      const matchSearch = !this.qSearchTerm ||
        q.title.toLowerCase().includes(this.qSearchTerm) ||
        q.question.toLowerCase().includes(this.qSearchTerm) ||
        q.company.toLowerCase().includes(this.qSearchTerm);

      const matchCat = this.selectedCategory === 'all' || q.category === this.selectedCategory;
      const matchDiff = this.selectedDifficulty === 'all' || q.difficulty === this.selectedDifficulty;

      return matchSearch && matchCat && matchDiff;
    });

    if (filtered.length === 0) {
      this.questionsAccordion.innerHTML = `
        <div style="text-align: center; padding: 40px; background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
          <i class="fas fa-search" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 8px;"></i>
          <p>No interview questions match your filter.</p>
        </div>
      `;
      return;
    }

    this.questionsAccordion.innerHTML = filtered.map(q => {
      const diffClass = q.difficulty === 'Hard' ? 'badge-danger' : q.difficulty === 'Medium' ? 'badge-warning' : 'badge-success';

      return `
        <div class="question-accordion-card" data-qid="${q.id}">
          <div class="question-card-header">
            <div class="question-title-group">
              <span class="q-category-tag">${q.category} • <span style="color: var(--text-muted);">${q.frequency}</span></span>
              <div class="q-title-text">${q.title}</div>
            </div>
            <div class="q-meta-pills">
              <span class="badge ${diffClass}">${q.difficulty}</span>
              <span class="badge badge-neutral"><i class="fas fa-building"></i> ${q.company}</span>
              <i class="fas fa-chevron-down toggle-arrow"></i>
            </div>
          </div>
          <div class="question-card-body">
            <div class="q-full-problem">
              <strong>Problem Statement:</strong>
              <p style="margin-top: 4px; color: var(--text-secondary);">${q.question}</p>
            </div>
            <div style="margin-bottom: 14px;">
              <strong style="color: var(--brand-secondary);">Key Solution Strategy & Complexity:</strong>
              <p style="margin-top: 4px; color: var(--text-secondary); white-space: pre-line; line-height: 1.5;">${q.solutionOverview}</p>
            </div>
            ${q.codeSnippet ? `
              <div>
                <strong>Reference Code / Blueprint:</strong>
                <div class="q-code-container">
                  <pre><code>${this.escapeHTML(q.codeSnippet)}</code></pre>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    this.questionsAccordion.querySelectorAll('.question-card-header').forEach(header => {
      header.addEventListener('click', (e) => {
        const card = header.closest('.question-accordion-card');
        card.classList.toggle('expanded');
      });
    });
  }

  escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
