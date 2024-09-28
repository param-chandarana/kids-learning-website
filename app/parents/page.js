import Footer from "@/components/kids/Footer";
import Header from "@/components/kids/Header";
import SubjectSelector from "@/components/parents/SubjectSelector";

const ChildPerformancePage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl p-4 my-4 text-center lg:text-left">
          Your Child's Performance
        </h1>
        <SubjectSelector />
      </main>
      <Footer />
    </div>
  );
};

export default ChildPerformancePage;
