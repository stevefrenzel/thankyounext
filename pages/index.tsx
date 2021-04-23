import Meta from '@utils/Meta';
import DeleteMe from '@components/DeleteMe';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <>
      <Meta />
      <a href="#main">Skip to main content</a>
      <DeleteMe />
    </>
  );
}
