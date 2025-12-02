import { Box, Button, SpaceBetween } from '@cloudscape-design/components';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';

import { LabeledInput } from '/addons/forms/labeled-input';
import type { InputChange } from '/addons/helpers/type-helpers';

export const EventSubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [state, handleSubmit] = useForm('xyzrjbqw');

  const handleEmailChange = (event: InputChange) => {
    setEmail(event.detail.value);
  };

  const hasErrors = state.errors ? Array.isArray(state.errors) && state.errors.length > 0 : false;

  if (state.succeeded) {
    return <Box variant="p" color="text-status-success">
      Thanks for subscribing! You'll receive email announcements about upcoming Vibe Code Austin events.
    </Box>;
  }

  return <SpaceBetween size="m">
    <Box variant="p">
      <strong>Stay updated:</strong> Subscribe to receive email announcements about upcoming Vibe Code Austin events.
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
          {state.submitting ? 'Subscribing...' : 'Subscribe to event announcements'}
        </Button>
      </SpaceBetween>
    </form>
  </SpaceBetween>;
};

