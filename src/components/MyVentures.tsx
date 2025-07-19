@@ .. @@
   return (
     <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
       {/* Page Header */}
-      <div className="px-6 py-8">
+      <div className="px-6 py-8 border-b-0">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
           <div className="flex items-center space-x-4">
             <button 
               onClick={onBack}
               className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
             >
               <ArrowLeft className="w-5 h-5" />
             </button>
             <div>
               <h1 className="text-3xl font-bold text-white">My Ventures</h1>
               <p className="text-gray-300">Manage and track your venture portfolio</p>
             </div>
           </div>