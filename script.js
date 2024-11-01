async function startAutomation() {
    const ra = document.getElementById('ra').value;
    const password = document.getElementById('password').value;

    if (!ra || !password) {
        displayNotification("Por favor, preencha todos os campos.");
        return;
    }

    displayNotification("Iniciando automação...");

    try {
        // Simulação de chamada à API para login e automação
        const response = await fetch(`https://exemplo-api.com/login?ra=${ra}&password=${password}`);
        
        if (!response.ok) {
            throw new Error("Erro ao fazer login.");
        }

        displayNotification("Login feito com sucesso!");
        
        // Aqui, continuaria o processo de automação de tarefas
    } catch (error) {
        console.error(error);
        displayNotification("Ocorreu um erro. Tente novamente.");
    }
}

function displayNotification(message) {
    const notifications = document.getElementById('notifications');
    notifications.textContent = message;
}
