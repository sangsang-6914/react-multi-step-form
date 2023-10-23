function CleanupPage() {
  return (
    <div className="flex flex-col h-[94vh] max-h-screen">
      <div className="sticky top-[3.625rem] bg-[#fff]">
        <section className="w-[32.5rem] mx-auto pt-6 pb-6 z-10">
          <h2 className="font-bold text-2xl">대청소</h2>
          <div>Progressbar</div>
        </section>
      </div>
      <section className="bg-light_gray w-full h-full">
        <div className="w-[40.5rem] mx-auto">
          <div className="p-4 mt-10 rounded-lg w-full h-[500px] bg-[#fff]">
            <h2>몇 가지 정보를 질문할게요</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CleanupPage;
