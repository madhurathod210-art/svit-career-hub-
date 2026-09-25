/**
 * Module 3: Student Academic Toolkit
 * (GPA Calculator, Pomodoro Focus Timer, Task Manager, 3D Flashcards Vault)
 */
import { FLASHCARDS_DATA } from '../data/mockData.js';

export class StudentToolkit {
  constructor(app) {
    this.app = app;
    this.activeToolkitTab = 'gpa'; // 'gpa', 'pomodoro', 'tasks', 'flashcards'

    // GPA Calculator State
    this.gpaCourses = [
      { id: 1, name: 'Data Structures & Algorithms', credits: 4, grade: 'O' },
      { id: 2, name: 'Operating Systems', credits: 4, grade: 'A+' },
      { id: 3, name: 'Database Management Systems', credits: 4, grade: 'A' },
      { id: 4, name: 'Probability & Statistics', credits: 3, grade: 'B+' },
      { id: 5, name: 'Technical Writing & Ethics', credits: 2, grade: 'O' }
    ];

    // Pomodoro Timer State
    this.pomoMode = 'pomodoro'; // 'pomodoro' (25m), 'shortBreak' (5m), 'longBreak' (15m)
    this.pomoDurations = {
      pomodoro: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60
    };
    this.pomoTimeLeft = this.pomoDurations.pomodoro;
    this.pomoTimerId = null;
    this.pomoIsRunning = false;
    this.pomoSessionsCompleted = this.loadPomoSessions();

    // Task Manager State
    this.tasks = this.loadTasks();
    this.taskFilter = 'all'; // 'all', 'pending', 'completed'

    // Flashcard State
    this.flashcards = this.loadFlashcards();
    this.currentDeck = 'all';
    this.filteredFlashcards = [...this.flashcards];
    this.currentCardIndex = 0;
    this.isCardFlipped = false;
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.renderGpaRows();
    this.calculateGPA();
    this.initPomodoro();
    this.renderTasks();
    this.initFlashcards();
  }

  cacheDOM() {
    this.container = document.getElementById('view-toolkit');
    
    // Toolkit Tab buttons
    this.tabButtons = document.querySelectorAll('.toolkit-tab-btn');
    this.panes = document.querySelectorAll('.toolkit-pane');

    // GPA elements
    this.gpaRowsContainer = document.getElementById('gpa-courses-list');
    this.addCourseBtn = document.getElementById('gpa-add-course-btn');
    this.gpaScoreDisplay = document.getElementById('gpa-score-display');
    this.gpaTotalCreditsDisplay = document.getElementById('gpa-total-credits-display');
    this.pastCreditsInput = document.getElementById('past-credits-input');
    this.pastCgpaInput = document.getElementById('past-cgpa-input');
    this.cgpaScoreDisplay = document.getElementById('cgpa-score-display');

    // Pomodoro elements
    this.pomoModeButtons = document.querySelectorAll('.pomo-mode-btn');
    this.pomoTimeDigits = document.getElementById('pomo-time-digits');
    this.pomoPhaseLabel = document.getElementById('pomo-phase-label');
    this.pomoStartBtn = document.getElementById('pomo-start-btn');
    this.pomoResetBtn = document.getElementById('pomo-reset-btn');
    this.pomoProgressCircle = document.getElementById('pomo-progress-circle');
    this.pomoStreakCount = document.getElementById('pomo-streak-count');

    // Task elements
    this.taskTitleInput = document.getElementById('task-input-title');
    this.taskTagInput = document.getElementById('task-input-tag');
    this.taskPrioritySelect = document.getElementById('task-input-priority');
    this.taskDateInput = document.getElementById('task-input-date');
    this.taskAddBtn = document.getElementById('task-add-btn');
    this.tasksListContainer = document.getElementById('tasks-list-container');
    this.taskFilterButtons = document.querySelectorAll('.task-filter-btn');

    // Flashcard elements
    this.deckSelect = document.getElementById('flashcard-deck-select');
    this.fcObject = document.getElementById('flashcard-object');
    this.fcQuestionText = document.getElementById('fc-question-text');
    this.fcAnswerText = document.getElementById('fc-answer-text');
    this.fcDeckTag = document.getElementById('fc-deck-tag');
    this.fcDiffBadge = document.getElementById('fc-diff-badge');
    this.fcCounterText = document.getElementById('fc-counter-text');
    this.fcPrevBtn = document.getElementById('fc-prev-btn');
    this.fcNextBtn = document.getElementById('fc-next-btn');
    this.fcFlipBtn = document.getElementById('fc-flip-btn');
    this.fcShuffleBtn = document.getElementById('fc-shuffle-btn');
    this.addCardModalBtn = document.getElementById('open-add-card-modal-btn');
    this.addCardModal = document.getElementById('add-flashcard-modal');
  }

  bindEvents() {
    // Toolkit Navigation
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchToolkitTab(tab);
      });
    });

    // GPA Calculator
    if (this.addCourseBtn) {
      this.addCourseBtn.addEventListener('click', () => this.addGpaRow());
    }

    if (this.pastCreditsInput) {
      this.pastCreditsInput.addEventListener('input', () => this.calculateGPA());
    }
    if (this.pastCgpaInput) {
      this.pastCgpaInput.addEventListener('input', () => this.calculateGPA());
    }

    // Pomodoro Timer
    this.pomoModeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        this.setPomoMode(mode);
      });
    });

    if (this.pomoStartBtn) {
      this.pomoStartBtn.addEventListener('click', () => this.togglePomodoro());
    }
    if (this.pomoResetBtn) {
      this.pomoResetBtn.addEventListener('click', () => this.resetPomodoro());
    }

    // Task Manager
    if (this.taskAddBtn) {
      this.taskAddBtn.addEventListener('click', () => this.addTask());
    }
    if (this.taskTitleInput) {
      this.taskTitleInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.addTask();
      });
    }
    this.taskFilterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.taskFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.taskFilter = btn.getAttribute('data-filter');
        this.renderTasks();
      });
    });

    // Flashcards
    if (this.fcObject) {
      this.fcObject.addEventListener('click', () => this.toggleCardFlip());
    }
    if (this.fcFlipBtn) {
      this.fcFlipBtn.addEventListener('click', () => this.toggleCardFlip());
    }
    if (this.fcPrevBtn) {
      this.fcPrevBtn.addEventListener('click', () => this.prevFlashcard());
    }
    if (this.fcNextBtn) {
      this.fcNextBtn.addEventListener('click', () => this.nextFlashcard());
    }
    if (this.fcShuffleBtn) {
      this.fcShuffleBtn.addEventListener('click', () => this.shuffleFlashcards());
    }
    if (this.deckSelect) {
      this.deckSelect.addEventListener('change', (e) => {
        this.currentDeck = e.target.value;
        this.filterDeck();
      });
    }

    // Add card modal
    if (this.addCardModalBtn && this.addCardModal) {
      this.addCardModalBtn.addEventListener('click', () => {
        this.addCardModal.classList.add('open');
      });
      const saveCardBtn = document.getElementById('save-new-card-btn');
      if (saveCardBtn) {
        saveCardBtn.addEventListener('click', () => this.saveNewCustomFlashcard());
      }
    }

    // Mastery Rating Buttons
    document.querySelectorAll('.mastery-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rating = e.currentTarget.getAttribute('data-rate');
        this.rateCardMastery(rating);
      });
    });

    // Keyboard navigation for Flashcards
    window.addEventListener('keydown', (e) => {
      const activeTab = document.querySelector('.view-container.active');
      if (activeTab && activeTab.id === 'view-toolkit' && this.activeToolkitTab === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          this.toggleCardFlip();
        } else if (e.code === 'ArrowRight') {
          this.nextFlashcard();
        } else if (e.code === 'ArrowLeft') {
          this.prevFlashcard();
        }
      }
    });
  }

  switchToolkitTab(tabKey) {
    this.activeToolkitTab = tabKey;
    this.tabButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabKey);
    });
    this.panes.forEach(p => {
      p.classList.toggle('active', p.id === `pane-toolkit-${tabKey}`);
    });
  }

  /* ==========================================================================
     1. GPA & CGPA CALCULATOR LOGIC
     ========================================================================== */

  renderGpaRows() {
    if (!this.gpaRowsContainer) return;
    const gradeOptions = [
      { code: 'O', pts: 10 },
      { code: 'A+', pts: 9 },
      { code: 'A', pts: 8 },
      { code: 'B+', pts: 7 },
      { code: 'B', pts: 6 },
      { code: 'C', pts: 5 },
      { code: 'P', pts: 4 },
      { code: 'F', pts: 0 }
    ];

    this.gpaRowsContainer.innerHTML = this.gpaCourses.map(course => `
      <div class="course-calc-row" data-id="${course.id}">
        <input type="text" class="form-control course-name-input" value="${course.name}" placeholder="Course Title">
        <select class="select-control course-credits-select">
          ${[1, 2, 3, 4, 5, 6].map(cr => `<option value="${cr}" ${cr === course.credits ? 'selected' : ''}>${cr} Credits</option>`).join('')}
        </select>
        <select class="select-control course-grade-select">
          ${gradeOptions.map(g => `<option value="${g.code}" ${g.code === course.grade ? 'selected' : ''}>${g.code} (${g.pts} pts)</option>`).join('')}
        </select>
        <button class="row-delete-btn" title="Remove course row"><i class="fas fa-trash-alt"></i></button>
      </div>
    `).join('');

    // Attach row events
    this.gpaRowsContainer.querySelectorAll('.course-calc-row').forEach(row => {
      const id = parseInt(row.getAttribute('data-id'), 10);
      const nameInput = row.querySelector('.course-name-input');
      const creditsSelect = row.querySelector('.course-credits-select');
      const gradeSelect = row.querySelector('.course-grade-select');
      const delBtn = row.querySelector('.row-delete-btn');

      nameInput.addEventListener('input', (e) => {
        const item = this.gpaCourses.find(c => c.id === id);
        if (item) item.name = e.target.value;
      });

      creditsSelect.addEventListener('change', (e) => {
        const item = this.gpaCourses.find(c => c.id === id);
        if (item) item.credits = parseInt(e.target.value, 10);
        this.calculateGPA();
      });

      gradeSelect.addEventListener('change', (e) => {
        const item = this.gpaCourses.find(c => c.id === id);
        if (item) item.grade = e.target.value;
        this.calculateGPA();
      });

      delBtn.addEventListener('click', () => {
        if (this.gpaCourses.length <= 1) {
          this.app.showToast('You must have at least one course row', 'warning');
          return;
        }
        this.gpaCourses = this.gpaCourses.filter(c => c.id !== id);
        this.renderGpaRows();
        this.calculateGPA();
      });
    });
  }

  addGpaRow() {
    const newId = Date.now();
    this.gpaCourses.push({
      id: newId,
      name: `Course Elective #${this.gpaCourses.length + 1}`,
      credits: 3,
      grade: 'A'
    });
    this.renderGpaRows();
    this.calculateGPA();
    this.app.showToast('Added new course row', 'info');
  }

  calculateGPA() {
    const gradeMap = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'P': 4, 'F': 0 };
    let totalCredits = 0;
    let totalWeightedPoints = 0;

    this.gpaCourses.forEach(c => {
      const pts = gradeMap[c.grade] !== undefined ? gradeMap[c.grade] : 0;
      totalCredits += c.credits;
      totalWeightedPoints += c.credits * pts;
    });

    const semesterGpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits) : 0;

    if (this.gpaScoreDisplay) {
      this.gpaScoreDisplay.textContent = semesterGpa.toFixed(2);
    }
    if (this.gpaTotalCreditsDisplay) {
      this.gpaTotalCreditsDisplay.textContent = `${totalCredits} Credits`;
    }

    // Cumulative CGPA calculation
    const pastCredits = parseFloat(this.pastCreditsInput?.value) || 0;
    const pastCgpa = parseFloat(this.pastCgpaInput?.value) || 0;

    if (this.cgpaScoreDisplay) {
      if (pastCredits > 0) {
        const overallCredits = pastCredits + totalCredits;
        const overallWeightedPoints = (pastCredits * pastCgpa) + totalWeightedPoints;
        const cumulative = overallCredits > 0 ? (overallWeightedPoints / overallCredits) : 0;
        this.cgpaScoreDisplay.textContent = cumulative.toFixed(2);
      } else {
        this.cgpaScoreDisplay.textContent = semesterGpa.toFixed(2);
      }
    }
  }

  /* ==========================================================================
     2. POMODORO FOCUS TIMER LOGIC (WITH WEB AUDIO SYNTHESIZER)
     ========================================================================== */

  initPomodoro() {
    this.updatePomodoroDisplay();
    if (this.pomoStreakCount) {
      this.pomoStreakCount.textContent = this.pomoSessionsCompleted;
    }
  }

  setPomoMode(mode) {
    if (this.pomoIsRunning) {
      this.pausePomodoro();
    }
    this.pomoMode = mode;
    this.pomoTimeLeft = this.pomoDurations[mode];
    this.pomoModeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    if (this.pomoPhaseLabel) {
      if (mode === 'pomodoro') this.pomoPhaseLabel.textContent = 'Focus Session';
      else if (mode === 'shortBreak') this.pomoPhaseLabel.textContent = 'Short Break';
      else this.pomoPhaseLabel.textContent = 'Long Break';
    }

    this.updatePomodoroDisplay();
  }

  togglePomodoro() {
    if (this.pomoIsRunning) {
      this.pausePomodoro();
    } else {
      this.startPomodoro();
    }
  }

  startPomodoro() {
    this.pomoIsRunning = true;
    if (this.pomoStartBtn) {
      this.pomoStartBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Focus';
      this.pomoStartBtn.classList.remove('btn-primary');
      this.pomoStartBtn.classList.add('btn-secondary');
    }

    this.playSynthTone(587.33, 0.15); // D5 chime tone

    this.pomoTimerId = setInterval(() => {
      if (this.pomoTimeLeft > 0) {
        this.pomoTimeLeft--;
        this.updatePomodoroDisplay();
      } else {
        this.completePomodoroSession();
      }
    }, 1000);
  }

  pausePomodoro() {
    this.pomoIsRunning = false;
    clearInterval(this.pomoTimerId);
    if (this.pomoStartBtn) {
      this.pomoStartBtn.innerHTML = '<i class="fas fa-play"></i> Resume Focus';
      this.pomoStartBtn.classList.remove('btn-secondary');
      this.pomoStartBtn.classList.add('btn-primary');
    }
  }

  resetPomodoro() {
    this.pausePomodoro();
    this.pomoTimeLeft = this.pomoDurations[this.pomoMode];
    if (this.pomoStartBtn) {
      this.pomoStartBtn.innerHTML = '<i class="fas fa-play"></i> Start Focus';
    }
    this.updatePomodoroDisplay();
  }

  completePomodoroSession() {
    this.pausePomodoro();
    this.playCompletionChime();

    if (this.pomoMode === 'pomodoro') {
      this.pomoSessionsCompleted++;
      this.savePomoSessions();
      if (this.pomoStreakCount) this.pomoStreakCount.textContent = this.pomoSessionsCompleted;
      this.app.showToast('Great job! Focus session completed. Take a break!', 'success');
      this.setPomoMode('shortBreak');
    } else {
      this.app.showToast('Break finished! Ready to focus again?', 'info');
      this.setPomoMode('pomodoro');
    }
  }

  updatePomodoroDisplay() {
    const mins = Math.floor(this.pomoTimeLeft / 60);
    const secs = this.pomoTimeLeft % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (this.pomoTimeDigits) {
      this.pomoTimeDigits.textContent = formatted;
    }

    // Circular progress stroke calculation (circumference: 2 * pi * 90 ≈ 565.48)
    if (this.pomoProgressCircle) {
      const total = this.pomoDurations[this.pomoMode];
      const progressRatio = this.pomoTimeLeft / total;
      const circumference = 565.48;
      const offset = circumference - (progressRatio * circumference);
      this.pomoProgressCircle.style.strokeDashoffset = offset;
    }
  }

  playSynthTone(freq, duration) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext unavailable or blocked by autoplay policy
    }
  }

  playCompletionChime() {
    try {
      this.playSynthTone(523.25, 0.2); // C5
      setTimeout(() => this.playSynthTone(659.25, 0.2), 150); // E5
      setTimeout(() => this.playSynthTone(783.99, 0.4), 300); // G5
    } catch (e) {}
  }

  loadPomoSessions() {
    try {
      return parseInt(localStorage.getItem('antigravity_pomo_streak'), 10) || 4;
    } catch (e) {
      return 4;
    }
  }

  savePomoSessions() {
    try {
      localStorage.setItem('antigravity_pomo_streak', this.pomoSessionsCompleted.toString());
    } catch (e) {}
  }

  /* ==========================================================================
     3. ASSIGNMENT & TASK CHECKLIST LOGIC
     ========================================================================== */

  renderTasks() {
    if (!this.tasksListContainer) return;
    const filtered = this.tasks.filter(t => {
      if (this.taskFilter === 'pending') return !t.completed;
      if (this.taskFilter === 'completed') return t.completed;
      return true;
    });

    if (filtered.length === 0) {
      this.tasksListContainer.innerHTML = `
        <div style="text-align: center; padding: 32px; color: var(--text-muted);">
          <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
          <p>No tasks in this view. Keep it up!</p>
        </div>
      `;
      return;
    }

    this.tasksListContainer.innerHTML = filtered.map(task => {
      const priorityClass = task.priority === 'High' ? 'badge-danger' : task.priority === 'Medium' ? 'badge-warning' : 'badge-info';
      return `
        <div class="task-item-card ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
          <div class="task-info-content">
            <div class="task-title">${task.title}</div>
            <div class="task-meta-row">
              <span class="badge ${priorityClass}">${task.priority}</span>
              <span><i class="fas fa-tag"></i> ${task.tag}</span>
              ${task.dueDate ? `<span><i class="far fa-calendar-alt"></i> ${task.dueDate}</span>` : ''}
            </div>
          </div>
          <button class="task-delete-btn" title="Delete Task"><i class="fas fa-trash-alt"></i></button>
        </div>
      `;
    }).join('');

    this.tasksListContainer.querySelectorAll('.task-item-card').forEach(card => {
      const id = card.getAttribute('data-task-id');
      const checkbox = card.querySelector('.task-checkbox');
      const delBtn = card.querySelector('.task-delete-btn');

      checkbox.addEventListener('change', () => {
        this.toggleTaskComplete(id);
      });

      delBtn.addEventListener('click', () => {
        this.deleteTask(id);
      });
    });
  }

  addTask() {
    const title = this.taskTitleInput?.value.trim();
    if (!title) {
      this.app.showToast('Please enter an assignment or task title', 'warning');
      return;
    }

    const tag = this.taskTagInput?.value.trim() || 'General';
    const priority = this.taskPrioritySelect?.value || 'Medium';
    const dueDate = this.taskDateInput?.value || '';

    const newTask = {
      id: 'task-' + Date.now(),
      title,
      tag,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
    this.renderTasks();

    if (this.taskTitleInput) this.taskTitleInput.value = '';
    if (this.taskTagInput) this.taskTagInput.value = '';
    this.app.showToast('Assignment added to your checklist', 'success');
  }

  toggleTaskComplete(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
      if (task.completed) {
        this.app.showToast('Task marked completed! 🎉', 'success');
      }
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
    this.renderTasks();
    this.app.showToast('Task removed', 'info');
  }

  loadTasks() {
    try {
      const saved = localStorage.getItem('antigravity_tasks');
      if (saved) return JSON.parse(saved);
    } catch (e) {}

    return [
      { id: 't-1', title: 'Submit OS Assignment on Page Replacement Algorithms', tag: 'CS202', priority: 'High', dueDate: '2026-09-20', completed: false },
      { id: 't-2', title: 'Practice 5 LeetCode DP Problems (Blind 75)', tag: 'DSA', priority: 'High', dueDate: '2026-09-18', completed: false },
      { id: 't-3', title: 'Review DBMS B+ Tree notes for quiz', tag: 'CS205', priority: 'Medium', dueDate: '2026-09-22', completed: true },
      { id: 't-4', title: 'Update Resume for Google SDE Campus Drive', tag: 'Placement', priority: 'Medium', dueDate: '2026-09-25', completed: false }
    ];
  }

  saveTasks() {
    try {
      localStorage.setItem('antigravity_tasks', JSON.stringify(this.tasks));
    } catch (e) {}
  }

  /* ==========================================================================
     4. 3D FLASHCARDS & NOTES VAULT LOGIC
     ========================================================================== */

  initFlashcards() {
    this.populateDeckFilter();
    this.filterDeck();
  }

  populateDeckFilter() {
    if (!this.deckSelect) return;
    const decks = [...new Set(this.flashcards.map(fc => fc.deck))];
    decks.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      this.deckSelect.appendChild(opt);
    });
  }

  filterDeck() {
    if (this.currentDeck === 'all') {
      this.filteredFlashcards = [...this.flashcards];
    } else {
      this.filteredFlashcards = this.flashcards.filter(fc => fc.deck === this.currentDeck);
    }
    this.currentCardIndex = 0;
    this.isCardFlipped = false;
    this.renderCurrentCard();
  }

  renderCurrentCard() {
    if (this.filteredFlashcards.length === 0) {
      if (this.fcQuestionText) this.fcQuestionText.textContent = 'No flashcards in this deck.';
      if (this.fcAnswerText) this.fcAnswerText.textContent = 'Add cards or switch decks.';
      if (this.fcCounterText) this.fcCounterText.textContent = '0 / 0';
      return;
    }

    const card = this.filteredFlashcards[this.currentCardIndex];
    if (this.fcObject) {
      this.fcObject.classList.remove('flipped');
      this.isCardFlipped = false;
    }

    if (this.fcQuestionText) this.fcQuestionText.textContent = card.question;
    if (this.fcAnswerText) this.fcAnswerText.textContent = card.answer;
    if (this.fcDeckTag) this.fcDeckTag.textContent = card.deck;
    if (this.fcDiffBadge) {
      this.fcDiffBadge.textContent = card.difficulty;
      this.fcDiffBadge.className = `badge ${card.difficulty === 'Hard' ? 'badge-danger' : card.difficulty === 'Medium' ? 'badge-warning' : 'badge-success'}`;
    }
    if (this.fcCounterText) {
      this.fcCounterText.textContent = `${this.currentCardIndex + 1} / ${this.filteredFlashcards.length}`;
    }
  }

  toggleCardFlip() {
    if (!this.fcObject) return;
    this.isCardFlipped = !this.isCardFlipped;
    this.fcObject.classList.toggle('flipped', this.isCardFlipped);
  }

  nextFlashcard() {
    if (this.filteredFlashcards.length === 0) return;
    this.currentCardIndex = (this.currentCardIndex + 1) % this.filteredFlashcards.length;
    this.renderCurrentCard();
  }

  prevFlashcard() {
    if (this.filteredFlashcards.length === 0) return;
    this.currentCardIndex = (this.currentCardIndex - 1 + this.filteredFlashcards.length) % this.filteredFlashcards.length;
    this.renderCurrentCard();
  }

  shuffleFlashcards() {
    for (let i = this.filteredFlashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredFlashcards[i], this.filteredFlashcards[j]] = [this.filteredFlashcards[j], this.filteredFlashcards[i]];
    }
    this.currentCardIndex = 0;
    this.renderCurrentCard();
    this.app.showToast('Deck shuffled!', 'info');
  }

  rateCardMastery(rating) {
    this.app.showToast(`Rated as ${rating}. Moving to next card...`, 'info');
    setTimeout(() => this.nextFlashcard(), 300);
  }

  saveNewCustomFlashcard() {
    const deck = document.getElementById('new-card-deck')?.value.trim() || 'General';
    const topic = document.getElementById('new-card-topic')?.value.trim() || 'Core Concept';
    const question = document.getElementById('new-card-question')?.value.trim();
    const answer = document.getElementById('new-card-answer')?.value.trim();
    const difficulty = document.getElementById('new-card-difficulty')?.value || 'Medium';

    if (!question || !answer) {
      this.app.showToast('Please enter both question and answer', 'warning');
      return;
    }

    const newCard = {
      id: 'fc-custom-' + Date.now(),
      deck,
      topic,
      question,
      answer,
      difficulty,
      tags: [deck, topic]
    };

    this.flashcards.unshift(newCard);
    this.saveFlashcards();
    this.filterDeck();
    if (this.addCardModal) this.addCardModal.classList.remove('open');
    this.app.showToast('Custom flashcard added to deck!', 'success');
  }

  loadFlashcards() {
    try {
      const saved = localStorage.getItem('antigravity_flashcards');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [...FLASHCARDS_DATA];
  }

  saveFlashcards() {
    try {
      localStorage.setItem('antigravity_flashcards', JSON.stringify(this.flashcards));
    } catch (e) {}
  }
}
