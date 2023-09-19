import {poductList} from '../App';

function Body(){
    const tempList=poductList;
    return (<form>
        <table>
        {
            (()=>{
                const arr=[];
                for (let i=0;i<tempList.length;i++)
                {
                    arr.push(<tr><td><input type='checkbox'/></td><label>{tempList[i]}</label><td></td></tr>);
                }
                return arr;
            })()
        }
        <tr><td colSpan={2}><button>Buy</button></td></tr>
        </table>
        </form>)
}
export default Body;