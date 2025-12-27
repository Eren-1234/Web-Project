// Sayfa tamamen yüklendiğinde çalışır
document.addEventListener('DOMContentLoaded', function() {
    console.log("Sayfa başarıyla yüklendi.");
    
    // İletişim formu kontrolü
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Sayfanın yenilenmesini engeller
            
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            if(name === "" || message === "") {
                alert("Lütfen tüm alanları doldurunuz!");
            } else {
                alert("Teşekkürler " + name + "! Mesajınız başarıyla alındı.");
                form.reset(); // Formu temizle
            }
        });
    }
});