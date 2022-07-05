import Link from 'next/link';

export default function Home() {
  return (
    <div className='hompage'>
      <h2>MHRise Wiki</h2>
      <table>
        <tr>
          <td>
            <Link href='/weapons'><a>Weapons</a></Link>
          </td>
          <td>
          <Link href='/armor'><a>Armors</a></Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
