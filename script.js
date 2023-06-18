let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            console.log(e.target);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Adv') {
            location.href = "https://humornama.com/wp-content/uploads/2020/10/Tera-Baap-Yaha-Chhod-ke-Gaya-Tha-Ki-Teri-Maa-meme-template-of-Welcome-1.jpg";
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})