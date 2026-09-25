/**
 * Module 5: Student Community & Q&A Forum
 */
import { COMMUNITY_THREADS } from '../data/mockData.js';

export class CommunityForum {
  constructor(app) {
    this.app = app;
    this.threads = this.loadThreads();
    this.userVotes = this.loadUserVotes(); // { [threadId]: 1 or -1 }
    this.searchTerm = '';
    this.activeTag = 'all';
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.renderThreads();
  }

  cacheDOM() {
    this.container = document.getElementById('view-community');
    this.searchInput = document.getElementById('forum-search-input');
    this.tagFiltersContainer = document.getElementById('forum-tag-filters');
    this.threadsContainer = document.getElementById('threads-stream-container');
    this.newThreadModalBtn = document.getElementById('open-new-thread-modal-btn');
    this.newThreadModal = document.getElementById('new-thread-modal');
    this.saveThreadBtn = document.getElementById('save-new-thread-btn');
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase().trim();
        this.renderThreads();
      });
    }

    if (this.tagFiltersContainer) {
      this.tagFiltersContainer.querySelectorAll('.forum-tag-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          this.tagFiltersContainer.querySelectorAll('.forum-tag-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeTag = btn.getAttribute('data-tag');
          this.renderThreads();
        });
      });
    }

    if (this.newThreadModalBtn && this.newThreadModal) {
      this.newThreadModalBtn.addEventListener('click', () => {
        this.newThreadModal.classList.add('open');
      });
    }

    if (this.saveThreadBtn) {
      this.saveThreadBtn.addEventListener('click', () => this.postNewThread());
    }
  }

  renderThreads() {
    if (!this.threadsContainer) return;

    const filtered = this.threads.filter(t => {
      const matchSearch = !this.searchTerm ||
        t.title.toLowerCase().includes(this.searchTerm) ||
        t.content.toLowerCase().includes(this.searchTerm) ||
        t.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));

      const matchTag = this.activeTag === 'all' || t.tags.some(tag => tag.toLowerCase() === this.activeTag.toLowerCase());

      return matchSearch && matchTag;
    });

    if (filtered.length === 0) {
      this.threadsContainer.innerHTML = `
        <div style="text-align: center; padding: 48px; background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
          <i class="fas fa-comments" style="font-size: 2.2rem; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
          <h3 style="font-size: 1.15rem; font-weight: 700;">No discussions found</h3>
          <p style="color: var(--text-secondary); margin-top: 4px;">Be the first to start a conversation in this topic!</p>
        </div>
      `;
      return;
    }

    this.threadsContainer.innerHTML = filtered.map(thread => {
      const userVote = this.userVotes[thread.id] || 0;
      const effectiveVotes = thread.upvotes - thread.downvotes + userVote;

      return `
        <div class="thread-post-card" data-thread-id="${thread.id}">
          <div class="vote-widget">
            <button class="vote-btn ${userVote === 1 ? 'voted-up' : ''}" data-vote="1" title="Upvote"><i class="fas fa-chevron-up"></i></button>
            <span class="vote-count">${effectiveVotes}</span>
            <button class="vote-btn ${userVote === -1 ? 'voted-down' : ''}" data-vote="-1" title="Downvote"><i class="fas fa-chevron-down"></i></button>
          </div>

          <div class="thread-content-area">
            <div class="thread-header-meta">
              <div class="author-chip">
                <div class="author-avatar-sm">${thread.avatar}</div>
                <div>
                  <span class="author-name">${thread.author}</span>
                  <span class="author-role-tag">• ${thread.authorRole}</span>
                </div>
              </div>
              <span style="font-size: 0.74rem; color: var(--text-muted); margin-left: auto;">${thread.createdAt}</span>
            </div>

            <h3 class="thread-title">${thread.title}</h3>
            <p class="thread-body-text">${thread.content}</p>

            <div class="thread-tags-row">
              ${thread.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
              ${thread.solved ? `<span class="badge badge-success"><i class="fas fa-check"></i> Solved Query</span>` : ''}
            </div>

            <div class="thread-footer-stats">
              <span class="replies-toggle-btn" style="cursor: pointer;">
                <i class="fas fa-reply"></i> ${thread.replies.length} Responses
              </span>
              <span><i class="far fa-eye"></i> ${thread.views} views</span>
            </div>

            <!-- Replies Tray -->
            <div class="thread-replies-tray">
              ${thread.replies.map(rep => `
                <div class="reply-card">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <div class="author-avatar-sm" style="width: 22px; height: 22px; font-size: 0.65rem;">${rep.avatar}</div>
                    <strong style="font-size: 0.82rem;">${rep.author}</strong>
                    <span style="font-size: 0.72rem; color: var(--text-muted);">• ${rep.authorRole}</span>
                  </div>
                  <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.45;">${rep.content}</p>
                </div>
              `).join('')}

              <div class="reply-input-box">
                <input type="text" class="form-control post-reply-input" placeholder="Write an academic response or advice...">
                <button class="btn btn-primary btn-sm submit-reply-btn"><i class="fas fa-paper-plane"></i> Reply</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.attachThreadEventListeners();
  }

  attachThreadEventListeners() {
    this.threadsContainer.querySelectorAll('.thread-post-card').forEach(card => {
      const id = card.getAttribute('data-thread-id');

      // Upvote / Downvote
      card.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const voteVal = parseInt(e.currentTarget.getAttribute('data-vote'), 10);
          this.handleVote(id, voteVal);
        });
      });

      // Submit Reply
      const replyInput = card.querySelector('.post-reply-input');
      const submitReplyBtn = card.querySelector('.submit-reply-btn');

      if (submitReplyBtn && replyInput) {
        submitReplyBtn.addEventListener('click', () => {
          const text = replyInput.value.trim();
          if (!text) {
            this.app.showToast('Please type a reply message', 'warning');
            return;
          }
          this.postReply(id, text);
          replyInput.value = '';
        });

        replyInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            submitReplyBtn.click();
          }
        });
      }
    });
  }

  handleVote(threadId, voteVal) {
    const current = this.userVotes[threadId] || 0;
    if (current === voteVal) {
      // Toggle off
      delete this.userVotes[threadId];
      this.app.showToast('Vote removed', 'info');
    } else {
      this.userVotes[threadId] = voteVal;
      this.app.showToast(voteVal === 1 ? 'Thread upvoted 👍' : 'Thread downvoted', 'info');
    }

    this.saveUserVotes();
    this.renderThreads();
  }

  postReply(threadId, replyText) {
    const thread = this.threads.find(t => t.id === threadId);
    if (!thread) return;

    const newReply = {
      id: 'rep-' + Date.now(),
      author: 'You (Student Member)',
      avatar: 'ME',
      authorRole: 'Enrolled Scholar',
      createdAt: 'Just now',
      upvotes: 1,
      content: replyText
    };

    thread.replies.push(newReply);
    this.saveThreads();
    this.renderThreads();
    this.app.showToast('Response posted successfully!', 'success');
  }

  postNewThread() {
    const title = document.getElementById('new-thread-title')?.value.trim();
    const tag = document.getElementById('new-thread-tag')?.value.trim() || '#Academics';
    const content = document.getElementById('new-thread-body')?.value.trim();

    if (!title || !content) {
      this.app.showToast('Please enter both thread title and question details', 'warning');
      return;
    }

    const newThread = {
      id: 'thread-' + Date.now(),
      author: 'You (Student Member)',
      avatar: 'ME',
      authorRole: 'Campus Explorer',
      title,
      tags: [tag.startsWith('#') ? tag : `#${tag}`],
      createdAt: 'Just now',
      upvotes: 1,
      downvotes: 0,
      views: 1,
      solved: false,
      content,
      replies: []
    };

    this.threads.unshift(newThread);
    this.saveThreads();
    this.renderThreads();

    if (this.newThreadModal) this.newThreadModal.classList.remove('open');
    this.app.showToast('Discussion question created!', 'success');

    // Clear modal fields
    const titleEl = document.getElementById('new-thread-title');
    const bodyEl = document.getElementById('new-thread-body');
    if (titleEl) titleEl.value = '';
    if (bodyEl) bodyEl.value = '';
  }

  loadThreads() {
    try {
      const saved = localStorage.getItem('antigravity_forum_threads');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [...COMMUNITY_THREADS];
  }

  saveThreads() {
    try {
      localStorage.setItem('antigravity_forum_threads', JSON.stringify(this.threads));
    } catch (e) {}
  }

  loadUserVotes() {
    try {
      const saved = localStorage.getItem('antigravity_forum_votes');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  }

  saveUserVotes() {
    try {
      localStorage.setItem('antigravity_forum_votes', JSON.stringify(this.userVotes));
    } catch (e) {}
  }
}
