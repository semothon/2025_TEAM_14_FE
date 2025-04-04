import { useState } from "react";

const useUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState(null);
  const [hasExtraMajor, setHasExtraMajor] = useState(false);
  const [extraMajor, setExtraMajor] = useState("");

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    department,
    setDepartment,
    grade,
    setGrade,
    hasExtraMajor,
    setHasExtraMajor,
    extraMajor,
    setExtraMajor,
  };
};

export default useUserForm;
