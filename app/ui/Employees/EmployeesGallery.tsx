"use client"

import Employee from "./Employee";
import {getEmployees} from "@/services/employee.service";
import { useApi } from "@/hooks/apiHook";
import { useEffect, useState } from "react";

type EmployeeStruct = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

type EmployeesResponse = {
  status: string;
  data: EmployeeStruct[];
  message: string;
}

type EmployeeGalleryProps = {}
const EmployeeGallery: React.FC<EmployeeGalleryProps> = () => {
  const { data, isLoading, error } = useApi<EmployeesResponse>(getEmployees, {user:1});
  const [employees, setEmployees] = useState<EmployeeStruct[] | undefined>([]);
  useEffect(() => { setEmployees(data?.data)}, [data]);
  return (
    <div className="">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      <div className="grid grid-cols-4 gap-4">
        {employees?.map((employee) => (
          <Employee key={employee.id} />
        ))}
      </div>
    </div>
  )
}

export default EmployeeGallery;