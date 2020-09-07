var select = document.getElementById('seguro');

function eleccion(){
    switch(this.value) {
        case 'basico':
            document.getElementById('basico-info').style.display = 'block';
            document.getElementById('intermedio-info').style.display = 'none';
            document.getElementById('premium-info').style.display = 'none';            
            break;
        case 'intermedio':
            document.getElementById('basico-info').style.display = 'none';
            document.getElementById('intermedio-info').style.display = 'block';
            document.getElementById('premium-info').style.display = 'none';
            break;
        case 'premium':
            document.getElementById('basico-info').style.display = 'none';
            document.getElementById('intermedio-info').style.display = 'none';
            document.getElementById('premium-info').style.display = 'block';
            break;
    }
}

select.addEventListener('change', eleccion, false);