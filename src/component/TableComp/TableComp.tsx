import { useContext } from "react";
import HealthDataContext from "../../store/health-data-context";
import styless from './TableComp.module.scss';
import { stateType } from "../../store/store-types";
const TableComp = () => {

    const {users} = useContext(HealthDataContext);
    console.log('healtContex users',users);

    const onEdit = (userDATA: stateType) => {
        console.table(userDATA)
    }

    const onView = (userDATA: stateType) => {
        console.table(userDATA)
    }

    const tBodyRow = users.map(user => {
      return  <tr className={styless['tr']} key={user.id}>
        <td className={styless['td']}> {user.id} 001 </td>
        <td className={styless['td']}> { user.name} vaibhav</td>
        <td className={styless['td']}> { user.BP.value} 210</td>
        <td className={styless['td']}> { user.HR.value} 310</td>
        <td className={styless['td']}> { user.SBP.value} 122</td>
        <td className={styless['td']}> { user.DBP.value}455</td>
        <td className={styless['td']}> { user.PR.value}545</td>
        <td className={styless['td']}> { user.SR.value}120</td>
        <td className={styless['td']}>

            <button onClick={() => onEdit(user)}>Edit</button>
        </td>
        <td className={styless['td']}>
        <button onClick={() => onView(user)}>View</button>
        </td>
      </tr>
    })

    return (
       

<table className={styless['table']}>
 <thead>
 <tr className={styless['tr']}>
    <th className={styless['th']}>Sr.No</th>
    <th className={styless['th']}>Name</th>
    <th className={styless['th']}>BP</th>
    <th className={styless['th']}>HR</th>
    <th className={styless['th']}>SBP</th>
    <th className={styless['th']}>DBP</th>
    <th className={styless['th']}>PR</th>
    <th className={styless['th']}>SR</th>
    <th className={styless['th']}>Edit</th>
    <th className={styless['th']}>View</th>
  </tr>
 </thead>
 <tbody>
        {tBodyRow}
 </tbody>
  
</table>
    )
};

export default TableComp;