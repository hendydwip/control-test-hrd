import Index from '@/components/page/employee/index.vue'
import Employee from '@/components/page/employee/employee.vue'
import EmployeeAdd from '@/components/page/employee/employeeAdd.vue'

export const routes = [
  {
    path: '/employees',
    component: Index,
    children:[
      {
        path: '',
        component: Employee
      },
      {
        path: 'add',
        name: 'tambah',
        component: EmployeeAdd
      },    
      {
        path: 'edit/:id',
        name: 'ubah',
        component: EmployeeAdd
      },          
    ]
  },    
]