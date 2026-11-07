import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface AddTaskButtonProps {
  onAdd: (title: string) => boolean;
}

export function AddTaskButton({ onAdd }: AddTaskButtonProps) {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputId = useId();

  useEffect(() => {
    if (!isEditing) {
      return;
    }
    inputRef.current?.focus();
  }, [isEditing]);

  useEffect(() => {
    if (!isEditing) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const form = formRef.current;
      const target = event.target;
      if (!form || !(target instanceof Node) || form.contains(target)) {
        return;
      }
      setIsEditing(false);
      setValue('');
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isEditing]);

  const cancel = () => {
    setIsEditing(false);
    setValue('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const added = onAdd(value);
    if (!added) {
      inputRef.current?.focus();
      return;
    }
    setValue('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      cancel();
    }
  };

  if (!isEditing) {
    return (
      <div className="add-task-wrap">
        <button type="button" className="add-task" onClick={() => setIsEditing(true)}>
          {t.add.button}
        </button>
      </div>
    );
  }

  return (
    <div className="add-task-wrap">
      <form ref={formRef} className="add-task-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor={inputId}>
          {t.add.label}
        </label>
        <input
          ref={inputRef}
          id={inputId}
          className="add-task-input"
          type="text"
          value={value}
          placeholder={t.add.placeholder}
          aria-label={t.add.label}
          autoFocus
          autoComplete="off"
          enterKeyHint="done"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
}
