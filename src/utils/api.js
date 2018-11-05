import axios from 'axios';

const token = process.env.REACT_APP_PARIS_API_KEY;


// Récuérer catégories
export const Event = async () => {
    try {
        const response = await axios.get(`https://api.paris.fr/api/data/2.1/QueFaire/get_categories/?token=${token}`);
        return response ;
      } catch (error) {
        console.error(error);
      }
};


// Récupérer les événements par id de categorie
export const AllEvents = async (categorie) => {
    try {
        const id = await getId(categorie);
     
        const result = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=${token}&categories=${id}&tags=&start=&end=&offset=&limit=`);
        console.log(result)
        return result.data;
    }
    catch(err) {
        console.log(err)
    }
};

// Récupérer un événement par id
export const OneEvent = async (id) => {
    const result = await axios.get(
        `https://api.paris.fr/api/data/2.0/QueFaire/get_activity/?token=${token}&id=${id}`
        )

        return result;
}


const getId = (name) => {
    
    switch(name){
        case "Expositions" :
        return 2;

        case "Beaux-Arts" :
        return 14;

        case "Humour" :
        return 21;

        case "Théâtre" :
        return 20;

        case "Art Contemporain":
        return 15;

        default: 
        return 0;
    }
};