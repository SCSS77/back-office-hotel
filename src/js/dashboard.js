document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.app_showDashboard');
    const dashboardContainer = document.querySelector('.app_dashboardContainer');

    toggleButton.addEventListener('click', () => {
      dashboardContainer.classList.toggle('show');
    });
});
  