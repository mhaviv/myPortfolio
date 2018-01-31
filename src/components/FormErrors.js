import React from 'react';
import "../css/formerrors.css";


export const FormErrors = ({formErrors}) =>
<div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          	<p
          		key={i}
          		className="formErrorStyle"
      		>
      			{fieldName} {formErrors[fieldName]}
      		</p>
        )
      } else {
        return '';
      }
    })}
  </div>