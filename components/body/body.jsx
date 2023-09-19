import {poductList} from '../../App';

function Body(props){
    const tempList=props.poductList.map((x)=><tr><td><input type='checkbox'/></td><label>{x}</label><td></td></tr>);
    return (<form>
        <table>
        {tempList}
        <tr><td colSpan={2}><button>Buy</button></td></tr>
        </table>
        </form>)
}
export default Body;