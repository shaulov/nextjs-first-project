import Heading from "./heading";
import { UserData } from '../types/user-data';

type ContactInfoProps = {
  contact: UserData,
}

function ContactInfo ({ contact }: ContactInfoProps) {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return (<Heading tag="h3" text="Empty contact" />);
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
}

export default ContactInfo;