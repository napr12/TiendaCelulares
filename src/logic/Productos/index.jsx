const Consultar = async ()=>{
    const resultado = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=20");
    const data = await resultado.json();
    return data
}
const OtraConsulta = ()=>{}
export default Consultar;