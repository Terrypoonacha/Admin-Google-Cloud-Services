// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
  }
  
  // Simulated feature actions
  function createUser() {
    alert('Create New Users feature coming soon!');
  }
  
  function generateMail() {
    alert('Generate and Send Mail feature coming soon!');
  }
  
  function deleteUser() {
    alert('Delete Users feature coming soon!');
  }
  
  function billingUsage() {
    alert('Billing & Credit Usage feature coming soon!');
  }
  
  // Login functionality
  const loginForm = document.getElementById('login-form');
  const loginPage = document.getElementById('login-page');
  const dashboard = document.getElementById('dashboard');
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginPage.classList.add('d-none');
    dashboard.classList.remove('d-none');
  });
  