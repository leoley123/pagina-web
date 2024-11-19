import { createAdminUser } from '../utils/createAdminUser';

async function setup() {
  try {
    await createAdminUser();
    console.log('Admin setup completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Admin setup failed:', error);
    process.exit(1);
  }
}

setup();