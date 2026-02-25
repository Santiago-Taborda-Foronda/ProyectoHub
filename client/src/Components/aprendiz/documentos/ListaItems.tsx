// src/Components/aprendiz/documentos/ListaItems.tsx
import React from "react";
import { Plus, X, GripVertical } from "lucide-react";

interface Props {
  items: string[];
  onChange: (items: string[]) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
}

const ListaItems: React.FC<Props> = ({
  items,
  onChange,
  label,
  placeholder = "Escribe un item...",
  required = false,
}) => {
  const agregarItem = () => {
    onChange([...items, ""]);
  };

  const actualizarItem = (index: number, valor: string) => {
    const nuevosItems = [...items];
    nuevosItems[index] = valor;
    onChange(nuevosItems);
  };

  const eliminarItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <button
          type="button"
          onClick={agregarItem}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <Plus size={16} />
          Agregar item
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <GripVertical size={16} className="text-gray-400 cursor-move" />
            <input
              type="text"
              value={item}
              onChange={(e) => actualizarItem(index, e.target.value)}
              placeholder={`${placeholder} ${index + 1}`}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => eliminarItem(index)}
              className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100"
            >
              <X size={16} />
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-sm text-gray-400 italic">
            No hay items agregados. Haz clic en "Agregar item" para comenzar.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListaItems;