import { redirect } from 'next/navigation';

/**
 * Root page component that redirects to the default counseling page.
 */
export default function RootPage() {
  redirect('/counseling');
  return null;
}
