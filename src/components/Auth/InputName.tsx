import { Icon, ErrorMsg } from '../../components/Auth';

import '../../scss/components/auth/input.scss';

interface InputType {
  value: string;
  validationPass: boolean;
}

interface NameProps {
  name: InputType;
  handleName: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputName = ({ name, handleName }: NameProps): JSX.Element => {
  return (
    <div className="input-container">
      <input type="text" name="name" id="name" value={name.value} onChange={handleName} required autoComplete="off" />

      <label htmlFor="name">Name</label>

      <span className="input-container__bar"></span>

      <Icon input={name} />

      <ErrorMsg target="name" input={name} />
    </div>
  );
};
