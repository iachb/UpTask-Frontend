import { UseFormRegister, FieldErrors } from "react-hook-form";
import ErrorMessage from "./../ErrorMessage";

type ProjectFormProps = {
  register: UseFormRegister<{
    projectName: "";
    clientName: "";
    description: "";
  }>;
  errors: FieldErrors<{
    projectName: "";
    clientName: "";
    description: "";
  }>;
};

export default function ProjectForm({errors, register}: ProjectFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label htmlFor="projectName" className="text-sm uppercase font-bold">
          Name of the Project
        </label>
        <input
          id="projectName"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Name of the Project"
          {...register("projectName", {
            required: "El Titulo del Proyecto es obligatorio",
          })}
        />

        {errors.projectName && (
          <ErrorMessage>{errors.projectName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="clientName" className="text-sm uppercase font-bold">
          Client Name
        </label>
        <input
          id="clientName"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Client Name"
          {...register("clientName", {
            required: "El Nombre del Cliente es obligatorio",
          })}
        />

        {errors.clientName && (
          <ErrorMessage>{errors.clientName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="description" className="text-sm uppercase font-bold">
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3  border border-gray-200"
          placeholder="Project Description"
          {...register("description", {
            required: "Una descripción del proyecto es obligatoria",
          })}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}