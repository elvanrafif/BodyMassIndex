    var kurang = "Anda termasuk kurus atau memiliki berat badan kurang, jika angka BMI Anda berada di bawah 18,5. Bagaimana cara menambah berat badan? Jika Anda ingin menaikkan berat badan, Anda perlu mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih besar dari kebutuhan kalori harian Anda. Anda bisa menambahkan asupan kalori Anda sebanyak 300-500 kkal per hari. Misalnya, jika kebutuhan total kalori harian Anda adalah 1700 kkal, Anda perlu mengonsumsi makanan dengan total 1700+500 = 2200 kkal per hari."

    var sehat = "Berat badan Anda bisa dikatakan ideal jika angka BMI Anda berada antara angka 18,5 sampai 22,9. Bagaimana cara menjaga agar berat badan tetap ideal? Anda perlu mengonsumsi makanan dan minuman sesuai dengan kebutuhan kalori harian Anda, untuk mempertahankan berat badan ideal seperti sekarang. Misalnya, jika kebutuhan kalori harian Anda adalah 1950 kkal, maka Anda harus mengonsumsi makanan dengan total kalori 1950 per harinya."

    var berlebih = "Anda termasuk gemuk atau memiliki berat badan berlebih jika angka BMI Anda berada antara angka 23 sampai 24,9. Bagaimana cara menurunkan berat badan? Untuk menurunkan berat badan, Anda harus mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih kecil dari kebutuhan kalori harian Anda. Kurangi sebanyak 300-500 kalori per hari dari hasil perhitungan yang Anda dapatkan. Mengurangi jumlah asupan Anda setidaknya 500 kkal per hari dapat membantu menurunkan berat badan Anda sebesar 0,5-1 kg per minggu. Misalnya, jika hasil dari perhitungan menunjukkan bahwa kebutuhan total kalori harian Anda adalah 2100 kkal, maka Anda hanya perlu mengonsumsi asupan kalori sebesar 1600 kkal per hari (2100-500 kkal)."

    var obese1 = "Untuk menurunkan berat badan, Anda harus mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih kecil dari kebutuhan kalori harian Anda. Kurangi sebanyak 300-500 kalori per hari dari hasil perhitungan yang Anda dapatkan. Mengurangi jumlah asupan Anda setidaknya 500 kkal per hari dapat membantu menurunkan berat badan Anda sebesar 0,5-1 kg per minggu. Misalnya, jika hasil dari perhitungan menunjukkan bahwa kebutuhan total kalori harian Anda adalah 2100 kkal, maka Anda hanya perlu mengonsumsi asupan kalori sebesar 1600 kkal per hari (2100-500 kkal). "

    var obese2 = "Untuk menurunkan berat badan, Anda harus mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih kecil dari kebutuhan kalori harian Anda. Kurangi sebanyak 300-500 kalori per hari dari hasil perhitungan yang Anda dapatkan. Mengurangi jumlah asupan Anda setidaknya 500 kkal per hari dapat membantu menurunkan berat badan Anda sebesar 0,5-1 kg per minggu. Misalnya, jika hasil dari perhitungan menunjukkan bahwa kebutuhan total kalori harian Anda adalah 2100 kkal, maka Anda hanya perlu mengonsumsi asupan kalori sebesar 1600 kkal per hari (2100-500 kkal)."    


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    var input_berat = document.getElementById('berat').value;
    parseInt(input_berat)
    var input_tinggi = document.getElementById('tinggi').value;
    parseInt(input_tinggi)
    var hasilBMI = Math.round(100000 * (parseInt(input_berat) / (parseInt(input_tinggi) * parseInt(input_tinggi)))) / 10;
    var kesimpulan = ''
    var kesimpulanDeskripsi = ''
    const backgroundModal = document.querySelector(".modal-content");

    if(hasilBMI <= 18.5){
        backgroundModal.style.backgroundColor = 'white';
        kesimpulan = "KURANG"
        kesimpulanDeskripsi = kurang
    } else if(hasilBMI > 18.5 && hasilBMI <= 22.9){
        backgroundModal.style.backgroundColor = 'green';
        kesimpulan = "SEHAT"
        kesimpulanDeskripsi = sehat
    } else if(hasilBMI > 22.9 && hasilBMI <= 24.9){
        backgroundModal.style.backgroundColor = 'orange';
        kesimpulan = "BERLEBIH"
        kesimpulanDeskripsi = berlebih
    } else if(hasilBMI > 24.9 && hasilBMI <= 29.9){
        backgroundModal.style.backgroundColor = 'red';
        kesimpulan = "OBESE 1"
        kesimpulanDeskripsi = obese1
    } else {
        backgroundModal.style.backgroundColor = 'black';
        backgroundModal.style.color = 'white';
        kesimpulan = "OBESE 2"
        kesimpulanDeskripsi = obese2
    }

    if(input_berat >= 10 && input_berat <= 200 && input_tinggi >= 80 && input_tinggi <= 220){
        modal.style.display = "block";
        
        document.getElementById('hasil').innerHTML = `<font size="5">Body Mass Index anda adalah <b>${hasilBMI}<br /> _________________________________</b></font><br /><br />  
        <font size="5">BMI anda masuk kategori <b>${kesimpulan}
        _________________________________</font></b><br /><br />
        <font size="3">${kesimpulanDeskripsi}</font>`
    }
    else{
    modal.style.display ="block";
    backgroundModal.style.backgroundColor = 'white';
    backgroundModal.style.color = 'black';
    backgroundModal.style.textAlign = 'center';
    document.getElementById('hasil').innerHTML = `<font size="6px"><b>INVALID INPUT</b></font>`
    }
} 




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
document.getElementById('tinggi').value = ''
document.getElementById('berat').value = ''
}

// When the user clicks anywhere outside of the modal, close it

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }