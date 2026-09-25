/**
 * Antigravity Student & College Discovery Hub - Main Application Coordinator
 */
import { CollegeExplorer } from './modules/collegeExplorer.js';
import { AcademicRoadmap } from './modules/academicRoadmap.js';
import { StudentToolkit } from './modules/studentToolkit.js';
import { CareerPlacement } from './modules/careerPlacement.js';
import { CommunityForum } from './modules/communityForum.js';

class AntigravityHubApp {
  constructor() {
    this.currentView = 'explorer';
    this.theme = this.loadTheme();
    this.toastContainer = null;
  }

  init() {
    this.applyTheme(this.theme);
    this.createToastContainer();
    this.bindGlobalNavigation();
    this.bindModalDismissers();

    // Initialize all 5 core modules
    this.explorer = new CollegeExplorer(this);
    this.academic = new AcademicRoadmap(this);
    this.toolkit = new StudentToolkit(this);
    this.placement = new CareerPlacement(this);
    this.community = new CommunityForum(this);

    this.explorer.init();
    this.academic.init();
    this.toolkit.init();
    this.placement.init();
    this.community.init();

    // Handle initial routing from URL hash or default
    const hash = window.location.hash.replace('#', '');
    if (hash && ['explorer', 'academic', 'toolkit', 'placement', 'community'].includes(hash)) {
      this.switchView(hash);
    } else {
      this.switchView('explorer');
    }

    // Bind Data Export & Backup
    const exportBtn = document.getElementById('export-workspace-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportWorkspaceData());
    }

    console.log('🚀 Antigravity Student & College Discovery Hub initialized successfully.');
  }

  bindGlobalNavigation() {
    // Nav items in sidebar
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item[data-view]');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = item.getAttribute('data-view');
        this.switchView(targetView);

        // Close sidebar on mobile
        const sidebar = document.querySelector('.app-sidebar');
        if (sidebar && window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      });
    });

    // Mobile Sidebar Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.app-sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.theme);
        this.saveTheme(this.theme);
        this.showToast(`Switched to ${this.theme} mode`, 'info');
      });
    }
  }

  switchView(viewName) {
    this.currentView = viewName;
    window.location.hash = viewName;

    // Update active class on nav items
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      const isMatch = item.getAttribute('data-view') === viewName;
      item.classList.toggle('active', isMatch);
    });

    // Update active container
    document.querySelectorAll('.view-container').forEach(container => {
      const isTarget = container.id === `view-${viewName}`;
      container.classList.toggle('active', isTarget);
    });

    // Update Header Title
    const headerTitle = document.getElementById('header-view-title');
    const headerDesc = document.getElementById('header-view-desc');
    const metaTitles = {
      explorer: { title: 'College Explorer & Discovery', desc: 'Explore top colleges, accreditation stats, cutoffs, and compare institutes side-by-side.' },
      academic: { title: 'Academic System & Course Visualizer', desc: 'Semester-wise milestone curricula, prerequisite graph visualizers, and universal grading schemes.' },
      toolkit: { title: 'Student Academic Toolkit', desc: 'Semester GPA calculator, Pomodoro focus timer, assignment manager, and 3D flashcards vault.' },
      placement: { title: 'Career & Campus Placement Center', desc: 'Campus recruitment tracker with CGPA eligibility checks and curated interview question bank.' },
      community: { title: 'Student Community & Q&A Forum', desc: 'Collaborate with peers, ask admissions or coursework queries, and share placement experiences.' }
    };

    if (headerTitle && metaTitles[viewName]) {
      headerTitle.textContent = metaTitles[viewName].title;
    }
    if (headerDesc && metaTitles[viewName]) {
      headerDesc.textContent = metaTitles[viewName].desc;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  bindModalDismissers() {
    // Close modal on close button click
    document.querySelectorAll('.modal-close-btn, .modal-dismiss-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('open');
      });
    });

    // Close on overlay backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
        }
      });
    });

    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(modal => {
          modal.classList.remove('open');
        });
      }
    });
  }

  createToastContainer() {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    this.toastContainer = container;
  }

  showToast(message, type = 'info') {
    if (!this.toastContainer) this.createToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconMap = {
      success: 'fas fa-check-circle',
      danger: 'fas fa-exclamation-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle'
    };

    toast.innerHTML = `
      <i class="${iconMap[type] || 'fas fa-info-circle'}" style="font-size: 1.1rem; color: var(--${type === 'danger' ? 'danger' : type === 'warning' ? 'warning' : type === 'success' ? 'success' : 'brand-primary'});"></i>
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  loadTheme() {
    const saved = localStorage.getItem('antigravity_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  saveTheme(theme) {
    localStorage.setItem('antigravity_theme', theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      themeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }

  exportWorkspaceData() {
    const backup = {
      exportedAt: new Date().toISOString(),
      tasks: this.toolkit.tasks,
      flashcards: this.toolkit.flashcards,
      collegeBookmarks: this.explorer.bookmarkedList,
      forumVotes: this.community.userVotes,
      pomoSessions: this.toolkit.pomoSessionsCompleted
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `antigravity_student_workspace_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    this.showToast('Workspace backup exported successfully!', 'success');
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.antigravityApp = new AntigravityHubApp();
  window.antigravityApp.init();
});
