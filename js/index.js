function search(name) {
    if (['CHOBANI'].indexOf(name.toUpperCase()) >= 0) {
        document.location.href = 'chobani.html';
        return;
    }
    if (['ECRU', 'ECRU SHOES', 'ECRU SHOE'].indexOf(name.toUpperCase()) >= 0) {
        document.location.href = 'ecru.html';
        return;
    }
    if (['SCHENGEN', 'SCHENGEN VISA', 'NETHERLANDS VISA'].indexOf(name.toUpperCase()) >= 0) {
        document.location.href = 'schengen.html';
        return;
    }
}