import { createAdminUser } from './createAdminUser';

export async function setupAdmin() {
  try {
    await createAdminUser();
    console.log('Admin setup completed successfully');
  } catch (error) {
    console.error('Admin setup failed:', error);
    throw error;
  }
}