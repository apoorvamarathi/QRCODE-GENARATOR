const ImgBox = document.getElementById("imgBox");
const QrImg=document.getElementById('qrimg');
const QrText = document.getElementById('Qrtext');
const iconDownload = document.getElementById("icon");

function GenerateQr(){

//  error handling and validation 
const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
if(QrText.value.length==0){
   QrText.classList.add("error");
   QrText.placeholder = "Input cannot be empty!"
}else if(!urlPattern.test(QrText.value)){
   QrText.classList.add("error");
   QrText.value="";
   QrText.placeholder="Please enter a valid URL!";
}else{
   QrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+ QrText.value;
   ImgBox.classList.add("show-img");
}

   setTimeout(()=>{
      QrText.classList.remove("error")
      QrText.placeholder="Enter your text or URL"
   },1000)
}

function downloadQr(){
const QrUrl = QrImg.src;
if(QrUrl && QrUrl.includes("data=")){
const link=document.createElement('a');
link.href=QrUrl;
link.download = "qr_code.png";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}else{
   alert("please generate a Qr code first!");
}
}

