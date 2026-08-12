              <div className="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
                {/* SECTION 1: Basic Information */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📝 Basic Information</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Course Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="e.g., Certificate in Fetal Monitoring"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="e.g., certificate-in-fetal-monitoring"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Program Type</label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Certificate">Certificate</option>
                        <option value="PG Diploma">PG Diploma</option>
                        <option value="Fellowship">Fellowship</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Category</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="e.g., cardiology"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Pricing & Duration */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">💰 Pricing & Duration</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Price (₹)</label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Duration (Months)</label>
                      <input
                        type="number"
                        step="0.5"
                        value={formData.months}
                        onChange={(e) => setFormData({ ...formData, months: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Total Lessons</label>
                      <input
                        type="number"
                        value={formData.lessons}
                        onChange={(e) => setFormData({ ...formData, lessons: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Level</label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Ratings */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">⭐ Ratings & Reviews</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Rating (0-5)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Review Count</label>
                      <input
                        type="number"
                        value={formData.reviewCount}
                        onChange={(e) => setFormData({ ...formData, reviewCount: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Overview */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📖 Overview</h3>
                  <textarea
                    value={formData.overview}
                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Course overview and description..."
                  />
                </div>

                {/* SECTION 5: What You'll Learn */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">✅ What You'll Learn</h3>
                  <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={formData.learnInput}
                        onChange={(e) => setFormData({ ...formData, learnInput: e.target.value })}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && formData.learnInput.trim()) {
                            setFormData({
                              ...formData,
                              learn: [...formData.learn, formData.learnInput.trim()],
                              learnInput: '',
                            });
                          }
                        }}
                        className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Add learning outcome and press Enter"
                      />
                      <button
                        onClick={() => {
                          if (formData.learnInput.trim()) {
                            setFormData({
                              ...formData,
                              learn: [...formData.learn, formData.learnInput.trim()],
                              learnInput: '',
                            });
                          }
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                      >
                        Add
                      </button>
                    </div>
                    <div className="space-y-1">
                      {formData.learn.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                          <span className="text-gray-300">{item}</span>
                          <button
                            onClick={() => setFormData({
                              ...formData,
                              learn: formData.learn.filter((_, i) => i !== idx),
                            })}
                            className="text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 6: Modules */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📚 Modules</h3>
                  <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={formData.moduleInput}
                        onChange={(e) => setFormData({ ...formData, moduleInput: e.target.value })}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && formData.moduleInput.trim()) {
                            setFormData({
                              ...formData,
                              modules: [...formData.modules, formData.moduleInput.trim()],
                              moduleDetails: [...formData.moduleDetails, []],
                              moduleInput: '',
                            });
                          }
                        }}
                        className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Add module and press Enter"
                      />
                      <button
                        onClick={() => {
                          if (formData.moduleInput.trim()) {
                            setFormData({
                              ...formData,
                              modules: [...formData.modules, formData.moduleInput.trim()],
                              moduleDetails: [...formData.moduleDetails, []],
                              moduleInput: '',
                            });
                          }
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                      >
                        Add
                      </button>
                    </div>
                    <div className="space-y-2">
                      {formData.modules.map((module, idx) => (
                        <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-blue-200">Module {idx + 1}: {module}</span>
                            <button
                              onClick={() => setFormData({
                                ...formData,
                                modules: formData.modules.filter((_, i) => i !== idx),
                                moduleDetails: formData.moduleDetails.filter((_, i) => i !== idx),
                              })}
                              className="text-red-400 hover:text-red-300"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 7: Module Sub-topics */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📋 Module Sub-topics</h3>
                  {formData.modules.length > 0 ? (
                    <div>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                          Select Module: 
                        </label>
                        <select
                          value={formData.selectedModuleIndex}
                          onChange={(e) => setFormData({ ...formData, selectedModuleIndex: parseInt(e.target.value) })}
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                          {formData.modules.map((module, idx) => (
                            <option key={idx} value={idx}>
                              {idx + 1}. {module}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex gap-2 mb-4">
                        <input
                          type="text"
                          value={formData.moduleDetailInput}
                          onChange={(e) => setFormData({ ...formData, moduleDetailInput: e.target.value })}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && formData.moduleDetailInput.trim()) {
                              const newDetails = [...formData.moduleDetails];
                              if (!newDetails[formData.selectedModuleIndex]) {
                                newDetails[formData.selectedModuleIndex] = [];
                              }
                              newDetails[formData.selectedModuleIndex].push(formData.moduleDetailInput.trim());
                              setFormData({
                                ...formData,
                                moduleDetails: newDetails,
                                moduleDetailInput: '',
                              });
                            }
                          }}
                          className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          placeholder="Add topic and press Enter"
                        />
                        <button
                          onClick={() => {
                            if (formData.moduleDetailInput.trim()) {
                              const newDetails = [...formData.moduleDetails];
                              if (!newDetails[formData.selectedModuleIndex]) {
                                newDetails[formData.selectedModuleIndex] = [];
                              }
                              newDetails[formData.selectedModuleIndex].push(formData.moduleDetailInput.trim());
                              setFormData({
                                ...formData,
                                moduleDetails: newDetails,
                                moduleDetailInput: '',
                              });
                            }
                          }}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                        >
                          Add
                        </button>
                      </div>

                      <div className="space-y-1">
                        {formData.moduleDetails[formData.selectedModuleIndex]?.map((topic, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                            <span className="text-gray-300">→ {topic}</span>
                            <button
                              onClick={() => {
                                const newDetails = [...formData.moduleDetails];
                                newDetails[formData.selectedModuleIndex] = newDetails[formData.selectedModuleIndex].filter((_, i) => i !== idx);
                                setFormData({ ...formData, moduleDetails: newDetails });
                              }}
                              className="text-red-400 hover:text-red-300"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">Add modules first to add sub-topics</p>
                  )}
                </div>

                {/* SECTION 8: FAQs */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">❓ FAQs</h3>
                  <div className="mb-4">
                    <div className="mb-2">
                      <input
                        type="text"
                        value={formData.faqQuestion}
                        onChange={(e) => setFormData({ ...formData, faqQuestion: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-2"
                        placeholder="Question"
                      />
                      <textarea
                        value={formData.faqAnswer}
                        onChange={(e) => setFormData({ ...formData, faqAnswer: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-2"
                        placeholder="Answer"
                      />
                      <button
                        onClick={() => {
                          if (formData.faqQuestion.trim() && formData.faqAnswer.trim()) {
                            setFormData({
                              ...formData,
                              faqs: [...formData.faqs, { q: formData.faqQuestion.trim(), a: formData.faqAnswer.trim() }],
                              faqQuestion: '',
                              faqAnswer: '',
                            });
                          }
                        }}
                        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                      >
                        Add FAQ
                      </button>
                    </div>
                    <div className="space-y-2 mt-3">
                      {formData.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                          <div className="flex items-start justify-between mb-1">
                            <div className="flex-1">
                              <div className="font-semibold text-yellow-300 text-sm">Q: {faq.q}</div>
                              <div className="text-gray-300 text-sm">A: {faq.a}</div>
                            </div>
                            <button
                              onClick={() => setFormData({
                                ...formData,
                                faqs: formData.faqs.filter((_, i) => i !== idx),
                              })}
                              className="text-red-400 hover:text-red-300 ml-2 flex-shrink-0"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 9: Meta Data */}
                <div className="pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">ℹ️ Meta Data</h3>
                  <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={formData.metaKey}
                        onChange={(e) => setFormData({ ...formData, metaKey: e.target.value })}
                        className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Key (e.g., duration, language)"
                      />
                      <input
                        type="text"
                        value={formData.metaValue}
                        onChange={(e) => setFormData({ ...formData, metaValue: e.target.value })}
                        className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Value"
                      />
                      <button
                        onClick={() => {
                          if (formData.metaKey.trim() && formData.metaValue.trim()) {
                            setFormData({
                              ...formData,
                              meta: {
                                ...formData.meta,
                                [formData.metaKey.trim()]: formData.metaValue.trim(),
                              },
                              metaKey: '',
                              metaValue: '',
                            });
                          }
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                      >
                        Add
                      </button>
                    </div>
                    <div className="space-y-1">
                      {Object.entries(formData.meta).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                          <span className="text-gray-300 text-sm"><strong>{key}:</strong> {String(value)}</span>
                          <button
                            onClick={() => {
                              const newMeta = { ...formData.meta };
                              delete newMeta[key];
                              setFormData({ ...formData, meta: newMeta });
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-slate-600">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setShowAddModal(false);
                    }}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveCourse}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                  >
                    {showEditModal ? 'Update Course' : 'Add Course'}
                  </button>
                </div>
              </div>