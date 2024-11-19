// Analytics utility functions
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path
    });
  }
};

export const trackEvent = (eventName: string, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Common events
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', { form_name: formName });
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', { button_name: buttonName });
};

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', { file_name: fileName });
};

export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link_click', { url });
};

// Custom event for loan calculator usage
export const trackLoanCalculator = (loanType: string, amount: number) => {
  trackEvent('loan_calculator_use', {
    loan_type: loanType,
    amount: amount
  });
};

// Custom event for appointment scheduling
export const trackAppointmentScheduled = (appointmentType: string) => {
  trackEvent('appointment_scheduled', {
    appointment_type: appointmentType
  });
};

// Custom event for blog engagement
export const trackBlogEngagement = (postId: string, action: 'view' | 'share' | 'complete_read') => {
  trackEvent('blog_engagement', {
    post_id: postId,
    action: action
  });
};