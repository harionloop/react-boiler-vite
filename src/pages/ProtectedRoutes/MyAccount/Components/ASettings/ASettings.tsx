import { Flex, FTextInput } from '@/components';
import theme from '@/theme/theme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'antd';
import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import styles from './ASettings.module.less';
import { SettingsValidationSchema } from './validation';
const DoneIcon = <MdDone style={{ color: theme.color.success_color }} />;
const CrossIcon = <RxCross2 style={{ color: theme.color.error_color }} />;

type TSettings = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type TRulesOutput = {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  oneNumber: boolean;
};

const settingsInitialValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
};

const ruleValues: TRulesOutput = {
  length: false,
  uppercase: false,
  lowercase: false,
  oneNumber: false
};

const paraStyling = {
  fontSize: '18px',
  margin: 0
};

const ASettings: React.FC = () => {
  const settingsMethods = useForm<TSettings>({
    mode: 'all',
    resolver: yupResolver(SettingsValidationSchema),
    defaultValues: settingsInitialValues
  });

  const { control } = settingsMethods;
  const inputPassword = useWatch({ control, name: 'newPassword', defaultValue: '' });

  const checkForPasswordRules = (ruleValues: TRulesOutput) => {
    ruleValues.length = false;
    ruleValues.uppercase = false;
    ruleValues.lowercase = false;
    ruleValues.oneNumber = false;

    if (inputPassword.length >= 8 && inputPassword.length <= 24) {
      ruleValues.length = true;
    }

    if (inputPassword.match(/[A-Z]/)) {
      ruleValues.uppercase = true;
    }

    if (inputPassword.match(/[a-z]/)) {
      ruleValues.lowercase = true;
    }

    if (inputPassword.match(/[0-9]/)) {
      ruleValues.oneNumber = true;
    }
  };
  checkForPasswordRules(ruleValues);

  return (
    <FormProvider {...settingsMethods}>
      <Flex flexDirection='column'>
        <Typography.Title level={4} style={{ color: theme.color.text_secondary, marginBottom: '50px' }}>
          Change Password
        </Typography.Title>
        <FTextInput
          name='currentPassword'
          label='Enter Current Password'
          type='password'
          InputLabelProps={{ shrink: true }}
          style={{ width: '300px' }}
        />

        <Flex flexDirection='row' gap='20px' width='600px' margin='50px 0 0 0 '>
          <FTextInput name='newPassword' label='Enter New Password' type='password' InputLabelProps={{ shrink: true }} />
          <FTextInput name='confirmPassword' label='Re - Enter Password' type='password' InputLabelProps={{ shrink: true }} />
        </Flex>

        {inputPassword && (
          <Flex flexDirection='column' width={'290px'} padding='10px 15px' className={styles.PasswordBox}>
            <Typography.Title level={5} style={{ color: theme.color.text_secondary }}>
              Password Rules:
            </Typography.Title>
            <Flex flexDirection='column'>
              <Flex flexDirection='row' alignItems='baseline'>
                {ruleValues?.length ? DoneIcon : CrossIcon}
                <Typography.Paragraph style={paraStyling}>8-24 characters long</Typography.Paragraph>
              </Flex>
              <Flex flexDirection='row' alignItems='baseline'>
                {ruleValues?.uppercase ? DoneIcon : CrossIcon}
                <Typography.Paragraph style={paraStyling}>At least one UpperCase</Typography.Paragraph>
              </Flex>
              <Flex flexDirection='row' alignItems='baseline'>
                {ruleValues?.lowercase ? DoneIcon : CrossIcon}
                <Typography.Paragraph style={paraStyling}>At least one Lowercase</Typography.Paragraph>
              </Flex>
              <Flex flexDirection='row' alignItems='baseline'>
                {ruleValues?.oneNumber ? DoneIcon : CrossIcon}
                <Typography.Paragraph style={paraStyling}>At least one Number</Typography.Paragraph>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </FormProvider>
  );
};

export default ASettings;
