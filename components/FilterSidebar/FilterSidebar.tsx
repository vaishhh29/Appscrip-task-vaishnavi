'use client';

import { useState } from 'react';
import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filterSections = [
    { key: 'idealFor', label: 'IDEAL FOR', items: ['Men', 'Women', 'Baby & Kids'] },
    { key: 'occasion', label: 'OCCASION', items: [] },
    { key: 'work', label: 'WORK', items: [] },
    { key: 'fabric', label: 'FABRIC', items: [] },
    { key: 'segment', label: 'SEGMENT', items: [] },
    { key: 'suitableFor', label: 'SUITABLE FOR', items: [] },
    { key: 'rawMaterials', label: 'RAW MATERIALS', items: [] },
    { key: 'pattern', label: 'PATTERN', items: [] },
  ];

  const FilterContent = () => (
    <div className={styles.filterContent}>
      {/* Customizable checkbox */}
      <div className={styles.filterSection}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Filter sections */}
      {filterSections.map((section) => (
        <div key={section.key} className={styles.filterSection}>
          <button
            onClick={() => toggleSection(section.key as keyof typeof expandedSections)}
            className={styles.sectionHeader}
            aria-expanded={expandedSections[section.key as keyof typeof expandedSections]}
          >
            <span className={styles.sectionTitle}>{section.label}</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={expandedSections[section.key as keyof typeof expandedSections] ? styles.chevronUp : styles.chevronDown}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {expandedSections[section.key as keyof typeof expandedSections] && (
            <div className={styles.sectionContent}>
              <button className={styles.allButton}>All</button>
              {section.items.map((item) => (
                <label key={item} className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar - Always rendered, visibility controlled by parent */}
      <aside className={styles.sidebar}>
        <FilterContent />
      </aside>

      {/* Mobile Modal - Only shown when isOpen is true */}
      {isOpen && (
        <aside className={styles.mobileModal}>
          <div className={styles.mobileHeader}>
            <h2 className={styles.filtersTitle}>FILTERS</h2>
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close filters">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <FilterContent />
        </aside>
      )}
    </>
  );
}