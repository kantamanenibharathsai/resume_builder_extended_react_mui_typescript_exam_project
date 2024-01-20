import React from 'react';
import './App.css';
import ChooseTemplateHomePage from './pages/choose_template_page/ChooseTemplatePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormResumePage from './pages/editor_details_page/EditorDetailsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseTemplateHomePage />} />
        <Route path="/editor/details" element={< FormResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
