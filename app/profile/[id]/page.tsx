export default function userProfile({ params }: any) {
  return (
    <div className="flex flrx-col items-center justify-center min-h-screen py-2">
      userProfile
      <span className="p-2 ml-2 text-black justify-normal bg-orange-300">
        userProfile {params.id}
      </span>
    </div>
  );
}
