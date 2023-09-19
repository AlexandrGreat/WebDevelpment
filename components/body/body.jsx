function Body(props){
    return (<form>
        <table>
        {props.poductList.map((x)=><tr><td><input type='checkbox'/></td><label>{x}</label><td></td></tr>)}
        <tr><td colSpan={2}><button>Buy</button></td></tr>
        </table>
        </form>)
}
export default Body;