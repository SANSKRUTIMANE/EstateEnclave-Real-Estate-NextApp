import axios  from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '241d1fffaamsh6a408b7978a6e91p12d541jsn1454f36d8cb6',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });
    return data;
}