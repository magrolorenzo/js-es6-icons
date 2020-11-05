// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona,
// che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal,
// visualizzare in pagina tutte le icone con il proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.


// Array copiato da repo di Sofia
$(document).ready( function (){
    // Template del elemento html icona  --->  <i class="fas fa-apple-alt"></i>

    const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];
    const colors = ["blue", "green", "coral"];
    const icon_types = [];

    // Ciclo per salvataggio tipi di Icone
    icons.forEach((icon) => getTypes(icon, icon_types));

    // Per ogni icona mi salvo prefix, family e name per ricreare la stringa html
    icons.forEach((icon) => addIcon(icon));

    icon_types.forEach((type) => {
        $("#select-tipo").append(`
            <option value="${type}">${type}</option>
        `)
    });

    $("#select-tipo").change(() =>{
        // Estraggo il valore selezionato
        const selected_type = $('#select-tipo').val();
        console.log(selected_type);

        if(selected_type!="all"){
            // Nascondo tutte le Icone
            $("#icon-wrapper").empty();
            // Salvo in un array solo quelle con tipo corrispondente
            const selected_icons = icons.filter((icon) =>{
                return icon.type == selected_type;
            });
            console.log(selected_icons);
            // E mostro solo quelle con il selected_type corrispondente
            selected_icons.forEach((icon) => addIcon(icon));
        } else {
            $("#icon-wrapper").empty();
            icons.forEach((icon) => addIcon(icon));
        };
    });






// **** Funzioni

    // Funzione per popolare l array dei tipi di icone
    function getTypes(icon_obj, array_t){
        let {type} = icon_obj;

        if(!array_t.includes(type)){
            array_t.push(type);
            console.log("Inserito tipo " + type);
        };
    }

    // Funzione finale per stampa a video con append
    function addIcon(icon){

        let {family, prefix, name, type} = icon;
        let indice_tipo = icon_types.indexOf(type);
        let coloreIcona = colors[indice_tipo];
        let html_string = '<i class="' + family + ' ' + prefix + name + '" style = "color:' + coloreIcona + '"></i>';

        $('#icon-wrapper').append(`
            <div class="icon">
            ${html_string}
            <p>${name}</p>
            </div>
            `);
    };





});
