import { signIn } from '@/actions/login';
import { Button } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <form action={signIn}>
        <Button type="submit">Oui</Button>
      </form>
    </>
  );
}
