import InputField from "./inputField";
import useForm from "../hooks/useForm";

export default function FormComponent() {
  const [formValues, handleChange, resetForm] = useForm({
    name: "",
    email: "",
    password: "",
    newPass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password === formValues.newPass) {
      resetForm();
    } else {
      alert("As senhas devem ser iguais");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Digite seu nome"
        autofocus
      />
      <InputField
        label="email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
        name="email"
        placeholder="Digite sua idade"
      />
      <InputField
        label="Senha"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        name="password"
        placeholder="Confirme sua senha"
        minlength="8"
      />
      <InputField
        label="Confirmar Senha"
        type="password"
        name="newPass"
        value={formValues.newPass}
        onChange={handleChange}
        placeholder="Confirme sua senha"
        minlength="8"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
