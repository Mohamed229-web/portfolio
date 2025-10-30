<template>
  <div class="empty-state">
    <div class="empty-state-content">
      <div class="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h3 class="empty-title">Aucun projet pour le moment</h3>
      <p class="empty-description">
        Les projets personnels arrivent bientôt ! Revenez prochainement pour découvrir mes nouvelles créations.
      </p>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 3rem 1rem;
}

.empty-state-content {
  max-width: 500px;
  text-align: center;
  padding: 3rem;
  background: rgba(42, 50, 87, 0.05);
  border: 2px dashed rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.empty-state-content:hover {
  border-color: rgba(42, 50, 87, 0.5);
  background: rgba(42, 50, 87, 0.08);
}

.empty-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 50, 87, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.4);
}

.empty-icon svg {
  width: 40px;
  height: 40px;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}

.empty-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
}

.empty-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.empty-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  color: #ffffff;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.empty-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(42, 50, 87, 0.4);
}

.empty-cta svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 480px) {
  .empty-state-content {
    padding: 2rem 1.5rem;
  }

  .empty-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }

  .empty-icon svg {
    width: 32px;
    height: 32px;
  }

  .empty-title {
    font-size: 1.25rem;
  }

  .empty-description {
    font-size: 0.95rem;
  }
}
</style>