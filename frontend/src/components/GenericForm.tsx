import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type FieldConfig<T> = {
  name: keyof T;
  label: string;
  type: 'text' | 'email' | 'select';
  options?: { value: string; label: string }[];
  required?: boolean;
};

type GenericFormProps<T> = {
  initialData: T;
  dataList?: T[];
  validate: (data: T) => Record<string, string>;
  onSave: (data: T) => void;
  fields: FieldConfig<T>[];
  basePath: string;
};

const GenericForm = <T extends Record<string, any>>({
  initialData,
  dataList,
  validate,
  onSave,
  fields,
  basePath,
}: GenericFormProps<T>) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isEditing && dataList && !dataList.some((item) => String(item.id) === id)) {
      navigate(basePath); // Redireciona se o item não for encontrado
    }
    setFormData(initialData); // Atualiza formData se initialData mudar
  }, [isEditing, dataList, id, navigate, basePath, initialData]);

  const handleChange = (name: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    const newErrors = validate({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
    navigate(basePath);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div>
      <h1>{isEditing ? 'Editar' : 'Criar'} Item</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={String(field.name)}>
            <label>{field.label}</label>
            {field.type === 'select' ? (
              <select
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => handleChange(field.name, formData[field.name])}
                required={field.required}
              >
                <option value="">Selecione</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => handleChange(field.name, formData[field.name])}
                required={field.required}
              />
            )}
            {errors[field.name] && <p className="error">{errors[field.name]}</p>}
          </div>
        ))}
        <button type="submit" disabled={!isFormValid}>
          {isEditing ? 'Salvar' : 'Criar'}
        </button>
        <button type="button" onClick={() => navigate(basePath)}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default GenericForm;