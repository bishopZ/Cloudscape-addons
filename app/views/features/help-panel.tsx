import { Box, Button, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import { useForm, ValidationError } from '@formspree/react';
import React, { memo, useState } from 'react';

import { LabeledInput } from '/addons/forms/labeled-input';
import type { InputChange } from '/addons/helpers/type-helpers';

export const HelpPanelContent = () => {
  const [email, setEmail] = useState('');
  const [state, handleSubmit] = useForm('mwvvevaz');

  const handleEmailChange = (event: InputChange) => {
    setEmail(event.detail.value);
  };

  if (state.succeeded) {
    return <HelpPanel
      header={<Header variant="h2">Stay Updated</Header>}>
      <SpaceBetween size="m">
        <Box variant="p" color="text-status-success">
          Thanks for joining! You'll receive announcements about new articles and content.
        </Box>
      </SpaceBetween>
    </HelpPanel>;
  }

  const hasErrors = state.errors ? Array.isArray(state.errors) && state.errors.length > 0 : false;

  return <HelpPanel
    header={<Header variant="h2">Stay Updated</Header>}>
    <SpaceBetween size="m">
      <Box variant="p">
        Sign up to receive email announcements about new articles, content updates, and other news. I only send emails when there's something meaningful to share.
      </Box>
      <form onSubmit={handleSubmit}>
        <SpaceBetween size="m">
          <div>
            <LabeledInput
              mode="email"
              label="Email address"
              placeholder="your@email.com"
              value={email}
              onChange={handleEmailChange}
              disabled={state.submitting}
              error={hasErrors ? 'Please enter a valid email address' : undefined}
            />
            <input type="hidden" name="email" value={email} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <Button
            variant="primary"
            formAction="submit"
            loading={state.submitting}
            disabled={!email || state.submitting}>
            {state.submitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </SpaceBetween>
      </form>
    </SpaceBetween>
  </HelpPanel>;
};

export default memo(HelpPanelContent);
