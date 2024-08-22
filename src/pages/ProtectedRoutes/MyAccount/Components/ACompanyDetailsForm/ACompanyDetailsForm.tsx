import { FAutocomplete, FTextInput } from '@/components';
import theme from '@/theme/theme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { Typography } from 'antd';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CompanyValidationSchema } from './validation';

type TCompanyDetailsForm = {
  companyDescription: string;
  companyAddress: string;
  companyServices: string;
  companyLocation: { value: string; label: string };
  contactNumber: string;
  websiteURL: string;
};

const companyLocations = [
  { value: 'Lorem1', label: 'Lorem1' },
  { value: 'Lorem2', label: 'Lorem2' }
];

const companyInitialValues = {
  companyDescription: '',
  companyAddress: '',
  companyServices: '',
  companyLocation: { value: 'Lorem1', label: 'Lorem1' },
  contactNumber: '',
  websiteURL: ''
};

const LabelStyle = {
  style: { fontSize: '18px' }
};

const ACompanyDetailsForm: React.FC = () => {
  const companyMethods = useForm<TCompanyDetailsForm>({
    mode: 'all',
    resolver: yupResolver(CompanyValidationSchema),
    defaultValues: companyInitialValues
  });

  return (
    <FormProvider {...companyMethods}>
      <Grid container direction='column' rowGap={3} maxWidth='800px'>
        <Typography.Title level={4} style={{ color: theme.color.text_secondary }}>
          Company Name - Lorem Ipsum
        </Typography.Title>

        <Grid item>
          <FTextInput name='companyDescription' label='Company Description' multiline maxLength={500} InputLabelProps={LabelStyle} />
        </Grid>

        <Grid item>
          <FTextInput name='companyAddress' label='Company Address' multiline maxLength={200} InputLabelProps={LabelStyle} />
        </Grid>
        <Grid item>
          <FTextInput name='companyServices' label='Services' InputLabelProps={LabelStyle} />
        </Grid>

        <Grid container columnGap={2} direction='row'>
          <Grid item xs={5}>
            <FAutocomplete name='companyLocation' placeholder='Enter Company Location' defaultFirst options={companyLocations} />
          </Grid>
          <Grid item xs={5}>
            <FTextInput name='contactNumber' label='Contact Number' InputLabelProps={LabelStyle} />
          </Grid>
        </Grid>

        <FTextInput name='websiteURL' label='Website URL' InputLabelProps={LabelStyle} />
      </Grid>
    </FormProvider>
  );
};

export default ACompanyDetailsForm;
