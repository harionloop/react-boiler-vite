import { FDatePicker, FTextInput } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { PersonalValidationSchema } from './validation';

type TPersonalDetailsForm = {
  firstName: string;
  lastName: string;
  phone: string;
  designation: string;
  dateOfJoining: string;
  adddress: string;
};

const personalInitialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  designation: '',
  dateOfJoining: '',
  adddress: ''
};

const LabelStyle = {
  style: { fontSize: '18px' }
};

const APersonalDetailsForm: React.FC = () => {
  const personalMethods = useForm<TPersonalDetailsForm>({
    mode: 'all',
    resolver: yupResolver(PersonalValidationSchema),
    defaultValues: personalInitialValues
  });

  return (
    <FormProvider {...personalMethods}>
      <Grid container direction='column' rowGap={4}>
        <Grid container direction='row' columnGap={5} style={{ paddingTop: '50px' }}>
          <Grid item xs={3}>
            <FTextInput name='firstName' label='First Name' InputLabelProps={LabelStyle} />
          </Grid>
          <Grid item xs={3}>
            <FTextInput name='lastName' label='Last Name' InputLabelProps={LabelStyle} />
          </Grid>
        </Grid>

        <Grid container direction='row' columnGap={2}>
          <Grid item xs={3}>
            <FTextInput name='phone' label='Phone Number' InputLabelProps={LabelStyle} />
          </Grid>
          <Grid item xs={3}>
            <FTextInput name='designation' label='Designation' InputLabelProps={LabelStyle} />
          </Grid>
          <Grid item xs={3}>
            <FDatePicker name='dateOfJoining' label='Date of Joining' />
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <FTextInput name='adddress' label='Residential Address' multiline maxLength={200} InputLabelProps={LabelStyle} />
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default APersonalDetailsForm;
